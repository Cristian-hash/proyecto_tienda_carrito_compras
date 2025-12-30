import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component/products.component';
import { ProductItemComponent } from './product-item.component/product-item.component';
import { CartComponent } from './cart.component/cart.component';
export const routes: Routes = [
  {
    path: 'productos',
    component: ProductsComponent,
  },
  {
    path: 'carrito',
    component: CartComponent,
  },
];
