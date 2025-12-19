import { Component } from '@angular/core';
import { Product } from '../models/producto.model';
import { ProductItemComponent } from "../product-item.component/product-item.component";

@Component({
  selector: 'app-products.component',
  imports: [ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  counter=0;
  onAddProduct(product: Product ){
    this.counter++;
  }
}
