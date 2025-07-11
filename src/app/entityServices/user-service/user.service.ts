import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RequestBaseService } from 'src/app/services/request-base.service';
import { environment } from 'src/environments/environment';

const API_URL_ORDER = environment.BASE_URL_ORDER;
const API_URL_CARS = environment.BASE_URL_CARS


@Injectable({
  providedIn: 'root',
})
export class UserService extends RequestBaseService {
  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  // ✅ Send order request with carId and optional scheduledTime
  addOrder(order: { carId: number; scheduledTime?: string | null }): Observable<Object> {
    return this.http.post(API_URL_ORDER + '/order', order, {
      headers: this.getHeaders,
    });
  }

  // ✅ Fetch cars of the logged-in customer
  getCustomerCars(): Observable<any[]> {
    return this.http.get<any[]>(API_URL_CARS + '/all', {
      headers: this.getHeaders,
    });
  }
}
