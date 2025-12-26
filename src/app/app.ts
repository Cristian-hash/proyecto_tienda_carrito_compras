import { Component, signal } from '@angular/core';
import { ProductsComponent } from './products.component/products.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('mini-tienda');
}
