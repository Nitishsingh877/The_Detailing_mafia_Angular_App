import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseUrl = '/api/cars'; // proxy backend or CORS must be set

  constructor(private http: HttpClient) {}

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/all`);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.baseUrl}/add`, car);
  }

  updateCar(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.baseUrl}/${id}`, car);
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.baseUrl}/${id}`);
  }
}
