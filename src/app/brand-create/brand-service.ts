//brand.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from './brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiUrl = 'http://localhost:8090/brands'; 
  constructor(private http: HttpClient) { }

  createBrand(newBrand: Brand): Observable<Brand> {
    return this.http.post<Brand>(this.apiUrl, newBrand);
  }

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.apiUrl);
  }

  getBrand(id: number): Observable<Brand> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Brand>(url);
  }
  deleteBrand(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  
  
}
