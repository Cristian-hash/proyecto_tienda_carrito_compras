import { Injectable } from "@angular/core";
import { Product } from "../models/producto.model";


@Injectable ({providedIn:'root'})


export class ProductService{

    private products : Product[]=[
        {id :1 ,nombre:'2',precio: 4,cantidad: 7},
        {id :1 ,nombre:'2',precio: 4,cantidad: 7}
    ];

    getProducts(): Product[]{
        return this.products;
    }
}