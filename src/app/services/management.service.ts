import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RequestBaseService } from './request-base.service';
import { AuthenticationService } from './authentication.service';
import { User } from '../models/User';

const API_URL_5 = environment.BASE_URL_MGMT;

@Injectable({
  providedIn: 'root',
})
export class ManagementService extends RequestBaseService {
  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  getUsersByRole(role: string): Observable<any> {
    return this.http.get(API_URL_5 + '/users/' + role, {
      headers: this.getHeaders,
    });
  }
  getWashers(): Observable<any> {
    return this.http.get(API_URL_5 + '/users/WASHER', {
      headers: this.getHeaders,
    });
  }
  getAllUsers(): Observable<any> {
    return this.http.get(`${API_URL_5}/all`, { headers: this.getHeaders });
  }
  deleteUser(user: User): Observable<any> {
    return this.http.delete(`${API_URL_5}/deleteUser/${user.id}`, {
      headers: this.getHeaders,
    });
  }
}
