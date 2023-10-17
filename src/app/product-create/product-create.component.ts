import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product-service';
import { BrandService } from '../brand-create/brand-service'; // Import BrandService
import { Product } from './product.model';
import { Brand } from '../brand-create/brand.model'; // Import Brand model

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  newProduct: Product = { id: null, code: '', description: '', price: 0, stock: 0, idBrand: null };
  brands: Brand[] = []; 

  constructor(
    private productService: ProductService,
    private brandService: BrandService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe(
      brands => this.brands = brands, 
      error => console.error('Error fetching brands', error)
    );
  }

  createProduct(): void {
    if (this.newProduct.code.trim() && this.newProduct.description.trim() && this.newProduct.price >= 0 && this.newProduct.stock >= 0 && this.newProduct.idBrand) {
      this.productService.createProduct(this.newProduct).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }
  
}

