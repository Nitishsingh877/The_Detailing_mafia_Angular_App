import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestBaseService } from 'src/app/services/request-base.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { WashPacks } from 'src/app/models/WashPacks';

const API_URL_6 = environment.BASE_URL_ADMIN;

@Injectable({
  providedIn: 'root',
})
export class AdminService extends RequestBaseService {
  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  getAllWP(): Observable<WashPacks[]> {
    return this.http.get<WashPacks[]>(API_URL_6 + '/findallWP', {
      headers: this.getHeaders,
    });
  }
  getOneWP(id: string): Observable<WashPacks>{
    return this.http.get<WashPacks>(API_URL_6 + '/findoneWP/' + id, {
      headers: this.getHeaders,
    });
  }
  addWashPack(wp: WashPacks): Observable<Object> {
    return this.http.post(API_URL_6 + '/addWP', wp, {
      headers: this.getHeaders,
    });
  }
  delWashPack(id: string): Observable<Object> {
    return this.http.delete(API_URL_6 + '/deleteWP/'+id , {
      headers: this.getHeaders,
    });
  }
  updateWP(id: string,wp: WashPacks): Observable<Object>{
    return this.http.put(API_URL_6 + '/updateWP/'+id,wp,{
      headers: this.getHeaders,
    });
  }
  
}
