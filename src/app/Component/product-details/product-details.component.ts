import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductAPIService } from 'src/app/Services/product-api.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId:number=0;
  product!:IProduct;
  constructor(private productService:ProductsService,private activatedRoute:ActivatedRoute,private productApi:ProductAPIService){

  }
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('productID')?Number(this.activatedRoute.snapshot.paramMap.get('productID')):0;
    
    //this.product = this.productService.getProductByID(this.productId);
    this.productApi.getProductById(this.productId).subscribe(data=>{
      this.product = data
      console.log(data);
    })
  }
}
