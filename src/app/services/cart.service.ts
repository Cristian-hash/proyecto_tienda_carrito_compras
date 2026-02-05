import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];

  add(product: Product) {
    this.items.push(product);
    // console.log('Carrito:', this.items);
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
