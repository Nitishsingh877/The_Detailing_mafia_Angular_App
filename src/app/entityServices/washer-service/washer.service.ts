import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/Order';
import { WashPacks } from 'src/app/models/WashPacks';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RequestBaseService } from 'src/app/services/request-base.service';
import { environment } from 'src/environments/environment';

const API_URL_6 = environment.BASE_URL_WASHER;

@Injectable({
  providedIn: 'root',
})
export class WasherService extends RequestBaseService {
  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  getUnassignedOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(API_URL_6 + '/findUnassigned', {
      headers: this.getHeaders,
    });
  }
  updatecompleteOrder(orderId: string): Observable<Object> {
    return this.http.put(API_URL_6 + '/updateStatus/' + orderId, {
      headers: this.getHeaders,
    });
  }
  getWPs(): Observable<WashPacks[]> {
    return this.http.get<WashPacks[]>(API_URL_6 + '/seeWP', {
      headers: this.getHeaders,
    });
  }
}
