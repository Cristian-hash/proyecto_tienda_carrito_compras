import { Component } from '@angular/core';
import { Product } from '../models/producto.model';
import { ProductItemComponent } from '../product-item.component/product-item.component';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-products.component',
  imports: [ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productos = [
    { nombre: 'Laptop', precio: 2500 },

    { nombre: 'Mouse', precio: 50 },

    { nombre: 'Teclado', precio: 120 },
  ];

  constructor(private cartService: CartService) {}
  counter = 0;

  onAddProduct(product: Product) {
    this.cartService.add(product);
  }

  agregar(product: any) {
    console.log(product);
  }
}
