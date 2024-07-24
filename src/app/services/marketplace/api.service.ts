import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {
    this.baseUrl = window.location.origin.replace(":4200","") + this.baseUrl;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, { username, password });
  }

  getCars(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cars`);
  }

  getFavorites(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/favorites/user/${userId}`);
  }

  getDealerInventory(dealerId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/dealers/${dealerId}/inventory`);
  }

  getDealerSales(dealerId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/dealers/${dealerId}/sales`);
  }
}
