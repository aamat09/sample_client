import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClotheService {
  private apiUrl = '/api/clothes';

  constructor(private http: HttpClient) {
    this.apiUrl = window.location.origin.replace(":4200","") + this.apiUrl;
  }

  getClothes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
