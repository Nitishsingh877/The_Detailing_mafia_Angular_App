import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Car {
  carId: number;
  brand: string;
  model: string;
  licenseNumberPlate: string;
}

@Component({
  selector: 'app-view-cars',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css']
})
export class ViewCarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars() {
     const headers = new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`
        });
    this.http.get<Car[]>('http://localhost:8080/api/cars/all',{headers} ).subscribe({
      next: data => this.cars = data,
      error: err => {
        console.error(err);
        alert('Failed to fetch cars');
      }
    });
  }
}
