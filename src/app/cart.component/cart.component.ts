import { Component } from '@angular/core';
import { Product } from '../models/producto.model';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart.component',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private cartService: CartService) {}
  items: Product[] = [];
  total = 0;
  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  saberTotal(): void {
    this.total = this.cartService.getTotal();
  }
  eliminar(product: Product) {
    this.cartService.remove(product);
    this.items = this.cartService.getItems();
    this.saberTotal();
  }
}
