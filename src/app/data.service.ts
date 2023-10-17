import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBrands(): Observable<any> {
    return this.http.get('http://localhost:8090/brands');
  }

  deleteBrand(brandId: number): Observable<any> {
    return this.http.delete(`http://localhost:8090/brands/delete/${brandId}`);
  }

  getProducts(): Observable<any> {
    return this.http.get('http://localhost:8090/products');
  }

  getProductById(productId: number): Observable<any> {
    return this.http.get(`http://localhost:8090/products/${productId}`);
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`http://localhost:8090/products/${productId}`);
  }

  updateProduct(productId: number, productData: any): Observable<any> {
    return this.http.put(`http://localhost:8090/products/${productId}`, productData);
  }
}
