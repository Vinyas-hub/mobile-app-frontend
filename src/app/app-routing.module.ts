import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListComponent } from './brand-list/brand-list.component';
import { ProductListComponent } from './product-list/product-list.component';

import { HomeComponent } from './home/home.component';
import { BrandCreateComponent } from './brand-create/brand-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create.component';
const routes: Routes = [
  
  { path: 'brands', component: BrandListComponent },
  
  { path: 'brands/create', component: BrandCreateComponent }, 
  { path: 'brands/delete/:id', component: BrandListComponent },

  { path: 'products', component: ProductListComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'products/edit/:id', component: ProductEditComponent },
  { path: 'products/delete/:id', component: ProductListComponent },
  { path: 'products/:brand', component: ProductListComponent },
  { path: 'home', component: HomeComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
