import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item.component/product-item.component';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private cartService: CartService, private productService: ProductService) {}
  counter = 0;

  ngOnInit() {
    this.mostrar();
  }

  mostrar(): void {
    this.productService.getProducts().subscribe((datos) => {
      this.products = datos;
    });
  }

  onAddProduct(product: Product) {
    this.cartService.add(product);
  }

  agregar(product: any) {
    console.log(product);
  }
}
