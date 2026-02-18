import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
//
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private base = 'http://localhost:8080/carrito';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.base);
  }
  getTotal(): Observable<number> {
    return this.http.get<number>(`${this.base}/total`);
  }
  add(product: Product) {
    return this.http.post(`${this.base}/productos`, product);
  }
  remove(id: number) {
    return this.http.delete(`${this.base}/${id}`);
  }
  empty() {
    return this.http.delete(this.base);
  }
}
