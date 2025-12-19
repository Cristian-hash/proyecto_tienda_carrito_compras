import { Component, signal } from '@angular/core';
import { ProductosComponent } from './productos/productos.component';

@Component({
  selector: 'app-root',
  imports: [ProductosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mini-tienda');
}
