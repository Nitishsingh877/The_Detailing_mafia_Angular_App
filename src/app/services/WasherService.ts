import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/Order';
import { environment } from 'src/environments/environment';

const API_BASE = `${environment.BASE_URL}/api/washer`;

@Injectable({
  providedIn: 'root'
})
export class WasherService {

  constructor(private http: HttpClient) {}

 

  // Get all unassigned or pending requests
  getUnassignedOrders(): Observable<Order[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Order[]>(`${API_BASE}/request`, {headers});
  }

  // Accept an order
  acceptOrder(orderId: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post(`${API_BASE}/accept/${orderId}`, {}, {headers});
  }

  // Decline an order
  declineOrder(orderId: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post(`${API_BASE}/decline/${orderId}`, {}, {headers});
  }
}
