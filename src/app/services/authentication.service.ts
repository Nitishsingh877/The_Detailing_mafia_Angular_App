import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

const API_URL = `${environment.BASE_URL_AUTH}`;

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('currentUser');
    const parsedUser: User = storedUser ? JSON.parse(storedUser) : new User();
    this.currentUserSubject = new BehaviorSubject<User>(parsedUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // New method to update current user state
  updateCurrentUser(user: User): void {
    this.currentUserSubject.next(user);
  }

  register(user: User): Observable<any> {
    return this.http.post(API_URL + '/signUp', user);
  }

  login(user: User): Observable<any> {
    const loginPayload = {
      email: user.email,
      password: user.password,
    };

    return this.http.post<any>(API_URL + '/login', loginPayload).pipe(
      map(response => {
        if (response?.user) {
          // Update BehaviorSubject and localStorage
          this.updateCurrentUser(response.user);
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          localStorage.setItem('token', response.token);
        }
        return response;
      })
    );
  }

  logOut(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(new User());
  }
}
