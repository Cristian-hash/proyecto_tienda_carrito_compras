import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
//
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private base = 'http://localhost:8080/carrito';

  constructor(private http: HttpClient) {
    //console.log('🛒 CartService creado', Math.random());
  }

  add(product: Product) /*: Observable<void>*/ {
    this.items.push(product);
    //return this.http.post<void>(`${this.base}/productos`, product);
    //this.http.post('http://localhost:8080/carrito/productos',product)
  }
}
