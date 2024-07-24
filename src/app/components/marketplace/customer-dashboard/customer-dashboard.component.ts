import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ApiService} from "../../../services/marketplace/api.service";

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent implements OnInit {
  cars: any[] = [];
  favorites: any[] = [];
  user: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);

    this.apiService.getFavorites(this.user.id).subscribe(data => {
      this.favorites = data;
    });

    this.apiService.getCars().subscribe(data => {
      this.cars = data;
    });
  }
}
