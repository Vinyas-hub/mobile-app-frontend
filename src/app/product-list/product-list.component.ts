//ProductListComponent.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import {ProductService} from '../product-create/product-service'
import { Router } from '@angular/router';
import { Product } from '../product-create/product.model';
import { AlertService } from '../alert.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  selectedBrand: string = '';
  updatedData: any = {};

  constructor(
    private dataService: DataService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedBrand = params['brand'];
      this.loadProduct();
    });
  }

  loadProduct(): void {
    this.dataService.getProducts().subscribe(data => {
      if (this.selectedBrand) {
        this.products = data.filter((product: { brand: string; }) => product.brand === this.selectedBrand);
      } else {
        this.products = data;
      }
    });
  }
  editProduct(id: number) {
    console.log(`Attempting to edit product with ID: ${id}`);
    this.router.navigate(['/products/edit', id]);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      response => {
      },
      error => {
        this.alertService.sendMessage('Product deleted successfully');
        this.loadProduct();
        console.error(error);
      }
    );
  }
  

}


