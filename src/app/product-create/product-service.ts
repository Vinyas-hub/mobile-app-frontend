//product-service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { BrandService } from '../brand-create/brand-service';
import { Brand } from '../brand-create/brand.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    
  })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8090/products'; 

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  createProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, newProduct);
  }
  getSingleProduct(id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }
  
  updateProduct(updatedProduct: Product): Observable<Product> {
    const url = `${this.apiUrl}/${updatedProduct.id}`;
    return this.http.put<Product>(url, updatedProduct);
  }

deleteProduct(productId: number) : Observable<Product> {
  const url = `${this.apiUrl}/delete/${productId}`;
  return this.http.delete<Product>(url, httpOptions);
}
}
