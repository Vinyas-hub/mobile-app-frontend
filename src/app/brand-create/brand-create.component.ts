//brand-create
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from './brand-service';
import { Brand } from './brand.model';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.css']
})
export class BrandCreateComponent {

  newBrand: Brand = { id: null, name: '' }; 

  constructor(private brandService: BrandService, private router: Router) { }

  createBrand(): void {
    if (this.newBrand.name.trim()) {
      this.brandService.createBrand(this.newBrand)
        .subscribe(() => {
          this.router.navigate(['/brands']); // Navigate back to the brand list after creation
        });
    }
  }
}
