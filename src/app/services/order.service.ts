import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderResponse } from '../models/OrderResponse';


const API_URL = environment.BASE_URL_ORDER; // Should be http://localhost:8080/api/order

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    });
  }

  getCurrentOrders(): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(`${API_URL}/current`, { headers: this.getHeaders() });
  }

  getPastOrders(): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(`${API_URL}/past`, { headers: this.getHeaders() });
  }

  getOrderById(id: number): Observable<OrderResponse> {
    return this.http.get<OrderResponse>(`${API_URL}/${id}`, { headers: this.getHeaders() });
  }

  updateOrder(id: number, order: OrderResponse): Observable<OrderResponse> {
    return this.http.put<OrderResponse>(`${API_URL}/${id}`, order, { headers: this.getHeaders() });
  }

  bookWashNow(orderRequest: any): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(`${API_URL}/wash-now`, orderRequest, { headers: this.getHeaders() });
  }

  scheduleWash(orderRequest: any): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(`${API_URL}/schdule/wash`, orderRequest, { headers: this.getHeaders() });
  }
}
