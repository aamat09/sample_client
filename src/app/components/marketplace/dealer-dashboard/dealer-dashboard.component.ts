import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ApiService} from "../../../services/marketplace/api.service";

@Component({
  selector: 'app-dealer-dashboard',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './dealer-dashboard.component.html',
  styleUrl: './dealer-dashboard.component.css'
})
export class DealerDashboardComponent implements OnInit {
  inventory: any[] = [];
  sales: any[] = [];
  user: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);

    this.apiService.getDealerInventory(this.user.id).subscribe(data => {
      this.inventory = data;
    });

    this.apiService.getDealerSales(this.user.id).subscribe(data => {
      this.sales = data;
    });
  }
}
