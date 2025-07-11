import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

interface Car {
  carId: number;
  brand: string;
  model: string;
  licenseNumberPlate: string;
}

@Component({
  selector: 'app-add-user-order',
  templateUrl: './add-user-order.component.html',
  styleUrls: ['./add-user-order.component.css'],
})
export class AddUserOrderComponent implements OnInit {
  sb = faShoppingBasket;

  cars: Car[] = [];
  selectedCarId: number | null = null;
  washType: string = 'INSTANT';
  scheduleDate: Date | null = null; // ✅ FIXED type
  scheduleTime: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    this.http.get<Car[]>('http://localhost:8080/api/cars/all', { headers }).subscribe({
      next: (data) => {
        console.log('Fetched cars:', data);
        this.cars = data;
      },
      error: (err) => {
        console.error('Error fetching cars:', err);
        Swal.fire('Failed to fetch cars', '', 'error');
      },
    });
  }

  addOrder() {
    if (!this.selectedCarId) {
      Swal.fire('Please select a car', '', 'warning');
      return;
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    let endpoint = '';
    let payload: any = { carId: this.selectedCarId };

    if (this.washType === 'SCHEDULED') {
      if (!this.scheduleDate || !this.scheduleTime) {
        Swal.fire('Please select both date and time for scheduled wash', '', 'warning');
        return;
      }

      const [hours, minutes] = this.scheduleTime.split(':').map(Number);
      const date = new Date(this.scheduleDate); // ✅ Use Date object
      date.setHours(hours);
      date.setMinutes(minutes);
      date.setSeconds(0);
      date.setMilliseconds(0);

      if (isNaN(date.getTime())) {
        Swal.fire('Invalid date/time combination', '', 'error');
        return;
      }

      const formatted = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}T${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
       payload.scheduledTime = formatted;
  
      endpoint = 'http://localhost:8080/api/order/schdule/wash';
    } else {
      endpoint = 'http://localhost:8080/api/order/wash-now';
    }

    this.http.post(endpoint, payload, { headers }).subscribe({
      next: () => {
        Swal.fire('Order placed successfully!', '', 'success');
        this.selectedCarId = null;
        this.scheduleDate = null;
        this.scheduleTime = '';
        this.washType = 'INSTANT';
      },
      error: (err) => {
        console.error('Order placement failed:', err);
        Swal.fire('Failed to place order', '', 'error');
      },
    });
  }
}
