import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item.component/product-item.component';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
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
  total: number = 0;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.total = this.gettotal();
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((datos) => {
      this.products = datos;
    });
  }
  /*
  loadProducts(): void {
  this.productService.getProducts().subscribe({
    next: (datos) => {
      console.log('DATOS:', datos);
      this.products = datos;
    },
    error: (err) => {
      console.error('ERROR BACKEND:', err);
    }
  });
}  
  */

  addToCart(product: Product) {
    this.cartService.add(product);
    this.total = this.gettotal();
    /* this.cartService.add(product).subscribe({
      next: () => {
        console.log('Producto agregado en servidor');
        // Opcional: mostrar mensaje o actualizar contador visual
      },
      error: (err) => {
        console.error('Error agregando al carrito', err);
        // Opcional: notificar al usuario
      },
    });*/
  }
  gettotal(): number {
    return this.cartService.getTotal();
  }
}
