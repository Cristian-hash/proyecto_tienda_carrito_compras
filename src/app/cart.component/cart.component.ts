import { Component } from '@angular/core';
import { Product } from '../models/producto.model';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items: Product[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

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
  vaciar() {
    this.cartService.empty();
    this.items = this.cartService.getItems();
    this.saberTotal();
  }
}
