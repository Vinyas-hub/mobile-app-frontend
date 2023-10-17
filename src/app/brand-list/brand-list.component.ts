// brand-list.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { BrandService } from '../brand-create/brand-service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  brands: any[]=[];

  constructor(private dataService: DataService, private router: Router, private brandService: BrandService) { } // Inject the BrandService

  ngOnInit(): void {
    this.loadBrands();
  }



  showProducts(brandName: string) {
    this.router.navigate(['/products', { brand: brandName }]);
  }
 

  loadBrands(): void {
    this.brandService.getBrands().subscribe(
      brands => {
        this.brands = brands;
      },
      error => {
        console.error('Error fetching brands', error);
      }
    );
  }

  deleteBrand(id: number) {
    this.brandService.deleteBrand(id).subscribe(() => {
      this.loadBrand();
    });
  }

  private loadBrand() {
    this.brandService.getBrands().subscribe(brands => {
      this.brands = brands;
    });
  }
}

