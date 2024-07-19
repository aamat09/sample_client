import { Component, OnInit } from '@angular/core';
import { ShoeProductService } from '../../services/shoe-product.service';
import { ClotheService } from '../../services/clothe.service';
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  shoeProducts: any[] = [];
  clothes: any[] = [];
  paginatedShoes: any[][] = [];
  pageSize = 5;
  currentPage = 0;

  constructor(
    private shoeProductService: ShoeProductService,
    private clotheService: ClotheService
  ) {}

  ngOnInit(): void {
    this.loadShoeProducts();
    this.loadClothes();
  }

  loadShoeProducts(): void {
    this.shoeProductService.getShoeProducts().subscribe(data => {
      this.shoeProducts = data;
      this.paginateShoes();
    });
  }

  loadClothes(): void {
    this.clotheService.getClothes().subscribe(data => {
      this.clothes = data;
    });
  }

  paginateShoes(): void {
    for (let i = 0; i < this.shoeProducts.length; i += this.pageSize) {
      this.paginatedShoes.push(this.shoeProducts.slice(i, i + this.pageSize));
    }
  }

  nextPage(): void {
    if (this.currentPage < this.paginatedShoes.length - 1) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
