import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoeProductService {
  private apiUrl = '/api/shoe-products';

  constructor(private http: HttpClient) {
    this.apiUrl = window.location.origin.replace(":4200","") + this.apiUrl;
  }

  getShoeProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
