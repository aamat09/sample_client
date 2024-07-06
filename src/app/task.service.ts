import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpClientModule} from "@angular/common/http";

interface Task {
  id: number;
  name: string;
  description: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = ""

  constructor(private http: HttpClient) {
   this.apiUrl = window.location.origin.replace(":4200","")+'/api/tasks';
  }

  getTasksForMonth(year: number, month: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}?year=${year}&month=${month}`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }
}
