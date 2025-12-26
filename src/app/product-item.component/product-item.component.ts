import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/producto.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() add = new EventEmitter<Product>();

  addProduct() {
    this.add.emit(this.product);
  }
}
