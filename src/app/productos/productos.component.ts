import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  standalone:true,
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class ProductosComponent {

productos = [
  { nombre: 'Laptop', precio: 2500 },
  { nombre: 'Mouse', precio: 50 },
  { nombre: 'Teclado', precio: 120 }
  ];
  agregar(product: any) {
  console.log(product);
}
}


