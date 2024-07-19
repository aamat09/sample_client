import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  private uploadUrl = '/api/pdf/'; // Your Spring Boot endpoint

  constructor(private http: HttpClient) {
    this.uploadUrl = window.location.origin.replace(":4200","") + this.uploadUrl;
  }

  uploadPdf(id: number, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('id', id.toString());
    formData.append('file', file);

    return this.http.post(this.uploadUrl+"upload", formData, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    });
  }

  getPdf(id: number): Observable<any> {
    return this.http.get(this.uploadUrl+"getText?id="+id, {
      responseType: 'json'
    });
  }
}
