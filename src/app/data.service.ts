import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3500';

  constructor(private http: HttpClient,private cookie:CookieService) {}

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

  AddUrlRoute(data:any):Observable<any> {
    const jwt = this.cookie.get('jwt')
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',Authorization: `Bearer ${jwt}`, });
    return this.http.post<any>(this.apiUrl+'/addUrl', data, { headers });
  }

  GetAnalytics():Observable<any> {
    const jwt = this.cookie.get('jwt')
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',Authorization: `Bearer ${jwt}`, });
    return this.http.get<any>(this.apiUrl+'/analytics', { headers });
  }

  GetOrigin(data:any):Observable<any> {
    const {urllink} = data
    const jwt = this.cookie.get('jwt')
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',Authorization: `Bearer ${jwt}`, });
    return this.http.post<any>(this.apiUrl+`/getOrigin`,{urllink}, { headers });
  }

  AddClick(data:any):Observable<any> {
    const {link} = data
    const jwt = this.cookie.get('jwt')
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',Authorization: `Bearer ${jwt}`, });
    return this.http.post<any>(this.apiUrl+`/addClick`,{link}, { headers });
  }

}

