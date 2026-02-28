import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item.component/product-item.component';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((datos) => {
      this.products = datos;
    });
  }

  addToCart(product: Product) {
    this.cartService.add(product).subscribe({
      next: () => console.log('Producto enviado al backend'),
      error: (err) => console.error('Error:', err),
    });
  }
}
