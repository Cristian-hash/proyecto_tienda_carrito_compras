import { Injectable } from '@angular/core';
import { Product } from '../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];

  add(product: Product) {
    this.items.push(product);
  }

  remove(product: Product) {
    this.items = this.items.filter((p) => p !== product);
  }

  getItems(): Product[] {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((total, product) => total + product.precio, 0);
  }
}
