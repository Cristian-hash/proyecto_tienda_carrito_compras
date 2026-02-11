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

  constructor(private http: HttpClient) {
    //console.log('🛒 CartService creado', Math.random());
  }

  private items: Product[] = [];

  add(product: Product) /*: Observable<void>*/ {
    this.items.push(product);
    //return this.http.post<void>(`${this.base}/productos`, product);
  }

  remove(product: Product) {
    this.items = this.items.filter((p) => p !== product);
  }

  getItems(): Product[] {
    return this.items;
  }

  getTotal(): number {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total = total + this.items[i].price;
    }
    return total;
  }

  empty() {
    this.items = [];
  }
}
