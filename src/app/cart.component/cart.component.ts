import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items: Product[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getItems().subscribe((data) => (this.items = data));
    this.cartService.getTotal().subscribe((t) => (this.total = t));
    console.log('Items en carrito:', this.cartService.getItems());
  }
  saberTotal() {
    this.cartService.getTotal().subscribe((t) => (this.total = t));
  }
  eliminar(product: Product) {
    this.cartService.remove(product.id).subscribe(() => {
      this.ngOnInit();
    });
  }
  vaciar() {
    this.cartService.empty().subscribe(() => {
      this.ngOnInit();
    });
  }
}
