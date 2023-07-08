import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductAPIService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent {
  
  constructor(private productApi: ProductAPIService, private router:Router) {}

  addproduct(){
    let product: IProduct = {
      id: 20,
      Quantity:15,
      Img: "https://eg.hm.com/assets/styles/HNM/16407833/3cf0fe4235077db983ec4e2f08d682feac016982/2/image-thumb__4719073__product_zoom_medium_606x504/170140de316d62cdb5a66c1edc967fe2462e545e.jpg",
      Name: "5-pack T-shirts Slim fit",
      Price: 50,     
      CayogryId:1,
      isPurchased:false,     
    };

    this.productApi.addProduct(product).subscribe({
      next: (data)=>{
        console.log(data);
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }
}
