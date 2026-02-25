import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  // dato que el padre le da al hijo.
  @Input() product!: Product;
  // evento que el hijo emite al padre (EventEmitter).
  @Output() add = new EventEmitter<Product>();
  //3-Component TS: interpreta la intención del usuario.
  addProduct() {
    this.add.emit(this.product);
  }
}
