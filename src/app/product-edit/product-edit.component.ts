
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product-create/product-service';
import { Product } from '../product-create/product.model';
import { Brand } from '../brand-create/brand.model';

import { BrandService } from '../brand-create/brand-service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    id!: number;
    product: Product = { id: null, code: '', description: '', price: 0, stock: 0, idBrand: null };
    brands: Brand[] = [];
    newProduct: Product = { id: null, code: '', description: '', price: 0, stock: 0, idBrand: null };
  
    constructor(private route: ActivatedRoute, 
                private productService: ProductService, 
                private brandService: BrandService, 
                private router: Router) { }
    
    ngOnInit(): void {
      this.id = +this.route.snapshot.paramMap.get('id')!;
      this.brandService.getBrands().subscribe(
        brands => this.brands = brands,
        error => console.error('Error fetching brands', error)
      );
  
      this.productService.getSingleProduct(this.id).subscribe(
        product => {
          this.product = product || this.product; 
        },
        error => console.error('Error fetching product', error)
      );
    }
  
    saveChanges(): void {
      if (this.product.code.trim() && this.product.description.trim() && this.product.price >= 0 && this.product.stock >= 0 && this.product.idBrand) {
        this.productService.updateProduct(this.product).subscribe(() => {
          this.router.navigate(['/products']);
        });
      }
    }
}