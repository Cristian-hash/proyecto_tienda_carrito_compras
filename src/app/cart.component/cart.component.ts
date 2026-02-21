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
  errorMessage = '';

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cargar();
    console.log(
      'Items en carrito:',
      this.cartService.getItems().subscribe({
        next: (data) => {
          this.items = data;
          console.log('Items reales recibidos:', data);
        },
        error: (err) => {
          console.error('Error cargando items', err);
        },
      }),
    );
  }

  saberTotal() {
    this.cartService.getTotal().subscribe((t) => (this.total = t));
  }

  eliminar(product: Product) {
    this.cartService.remove(product.id).subscribe({
      next: () => {
        this.cargar();
      },
      error: (err) => {
        console.error('Error eliminando producto', err);
      },
    });
  }

  vaciar() {
    this.cartService.empty().subscribe({
      next: () => {
        this.cargar();
      },
      error: (err) => {
        console.error('Error vaciando carrito', err);
      },
    });
  }

  private cargar() {
    this.cartService.getItems().subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (err) => {
        console.error('Error cargando items', err);
        this.errorMessage = 'No se pudo cargar el carrito';
      },
    });

    this.cartService.getTotal().subscribe({
      next: (t) => {
        this.total = t;
      },
      error: (err) => {
        console.error('Error cargando total', err);
      },
    });
  }
}
