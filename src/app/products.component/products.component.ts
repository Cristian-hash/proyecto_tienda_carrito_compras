import { Component } from '@angular/core';
import { Product } from '../models/producto.model';
import { ProductItemComponent } from '../product-item.component/product-item.component';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.services';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
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
  mostrar(): void {
    this.productService.getProducts().subscribe((datos) => {
      this.products = datos;
    });
  }
}
