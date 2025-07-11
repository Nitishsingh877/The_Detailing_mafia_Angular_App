import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})

export class RequestBaseService {
  protected currentUser: User = new User();

  protected constructor(
    protected authenticationService: AuthenticationService,
    protected http: HttpClient
  ) {
    this.authenticationService.currentUser.subscribe((data) => {
      this.currentUser = data;
    });
  }
  
  //To add the token field of the user to the bearer tag for auth
  get getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: 'Bearer ' + this.currentUser?.token,
      'Content-Type': 'application/json',
    });
  }
}
