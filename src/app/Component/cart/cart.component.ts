import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartProducts:IProduct[]=[]
  constructor(productService:ProductsService){
    this.cartProducts= productService.producrCart;
  }
}
