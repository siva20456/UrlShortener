import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3500';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  UserRegistration(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl+'/register', data, { headers });
  }

  UserLogin(data:any):Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl+'/login', data, { headers });
  }
}
