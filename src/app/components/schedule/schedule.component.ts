import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {TaskService} from "../../services/task.service";
import {FormsModule} from "@angular/forms";
import {DatePipe, NgForOf, NgIf} from "@angular/common";

interface Task {
  id: number;
  name: string;
  description: string;
  date: Date;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  @ViewChild('taskModal') taskModal: TemplateRef<any> | undefined;

  days: { date: Date, tasks: Task[] }[] = [];
  newTask: { name: string, description: string } = { name: '', description: '' };
  selectedDay: any;

  constructor(private modalService: NgbModal, private taskService: TaskService) { }

  ngOnInit(): void {
    const today = new Date();
    this.loadTasksForMonth(today.getFullYear(), today.getMonth() + 1);
  }

  getDaysInMonth(year: number, month: number): { date: Date, tasks: Task[] }[] {
    const date = new Date(year, month - 1, 1);
    const days = [];
    while (date.getMonth() === month - 1) {
      days.push({ date: new Date(date), tasks: [] });
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  loadTasksForMonth(year: number, month: number): void {
    this.days = this.getDaysInMonth(year, month);
    this.taskService.getTasksForMonth(year, month).subscribe((tasks: any[]) => {
      tasks.forEach(task => {
        const taskDate = new Date(task.date);
        const day = this.days.find(d => d.date.toDateString() === taskDate.toDateString());
        if (day) {
          day.tasks.push(task);
        }
      });
    });
  }

  openTaskModal(): void {
    this.modalService.open(this.taskModal);
  }

  addTask(modal: { close: () => void; }): void {
    if (this.newTask.name && this.newTask.description && this.selectedDay) {
      const task: Task = {
        id: 0,
        name: this.newTask.name,
        description: this.newTask.description,
        date: this.selectedDay.date
      };
      this.taskService.createTask(task).subscribe((savedTask: any) => {
        this.selectedDay.tasks.push(savedTask);
        this.newTask = { name: '', description: '' }; // Reset the form
        modal.close();
      });
    }
  }
}
