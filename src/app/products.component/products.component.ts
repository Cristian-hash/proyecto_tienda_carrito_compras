import { Component } from '@angular/core';
import { Product } from '../models/producto.model';
import { ProductItemComponent } from '../product-item.component/product-item.component';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-products',
  imports: [ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = [];

  constructor(private cartService: CartService) {}
  counter = 0;

  onAddProduct(product: Product) {
    this.cartService.add(product);
  }

  agregar(product: any) {
    console.log(product);
  }
}
