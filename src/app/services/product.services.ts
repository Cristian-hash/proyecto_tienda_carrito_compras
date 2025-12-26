import { Injectable } from '@angular/core';
import { Product } from '../models/producto.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: 1, nombre: 'CPU', precio: 4, cantidad: 7 },
    { id: 2, nombre: 'Monitor', precio: 2, cantidad: 4 },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
