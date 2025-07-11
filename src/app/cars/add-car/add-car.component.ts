import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  carForm = {
    brand: '',
    model: '',
    licenseNumberPlate: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  addCar() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    this.http.post("http://localhost:8080/api/cars/add", this.carForm, {headers}).subscribe({
      next: () => {
         Swal.fire({
                title: 'Car added successfully!',
                icon: 'success',
              });
        this.router.navigate(['/user/view/cars']);
      },
      error: err => {
        console.error(err);
        alert('Failed to add car');
      }
    });
  }
}
