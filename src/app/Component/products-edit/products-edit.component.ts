import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { ICatogry } from 'src/app/Models/icatogry';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { ProductAPIService } from 'src/app/Services/product-api.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit{
  productList:IProduct[]= this.productService.getAllProduct();
  discount = DiscountOffers.FifteenPercent;
  selectedCategory = 0;
  filteredProducts: IProduct[]= this.productList;
  _listFilter: number = 0;
  store = new Store("ken ADAMAS","https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.designmantic.com%2Flogo-images%2F170962.png%3Fcompany%3DCompany%2BName%26slogan%3D%26verify%3D1&tbnid=wbtsVOk5B9BCBM&vet=12ahUKEwj53M-q7M7_AhVxgv0HHWKlDOgQMyglegUIARC_Ag..i&imgrefurl=https%3A%2F%2Fwww.designmantic.com%2Flogos%2Fsearch%2Fmarket&docid=nxF2089rxeLiSM&w=440&h=338&q=logo%20for%20market&ved=2ahUKEwj53M-q7M7_AhVxgv0HHWKlDOgQMyglegUIARC_Ag",
  ["Aswan","Cairo"]);
  clientName = 'soha';
  catogryList : ICatogry[]=[
    {id:1, Name:"clothes"},
    {id:2, Name:"shoes"},
    {id:3, Name:"bags"},
  ]

  constructor(private productService:ProductsService, private router:Router, private productApi:ProductAPIService) {
    this.store.addCatogries(this.catogryList);
    this.selectedCategory = this.catogryList[0].id;
    console.log(this.filteredProducts);
  }

  ngOnInit():void{
    this.productApi.getAllProduct().subscribe(data=>{
      this.filteredProducts = data;
      console.log(this.filteredProducts);
    })
  }
  filterProducts(idcat:string){   
    // this.filteredProducts = this.productList.filter(product => product.CayogryId ===Number(idcat));
    //this.filteredProducts = this.productService.getProductsByCatID(Number(idcat));
    this.productApi.getProductsByCatID(Number(idcat)).subscribe(data=>{
      this.filteredProducts = data;
    })
    if(idcat=="0") this.filteredProducts = this.productList;
  }
  productDetails(id:any){
    console.log("clicke me "+id)
    this.router.navigate(['/productde',id])
  }

  updateProduct(){

  }
  deleteProduct(productId:number){
    const confirmation = confirm('Are you sure you want to delete this product?');
    if (confirmation) {
      this.productApi.deleteProduct(productId).subscribe(
        () => {
          console.log('Product deleted');
          this.router.navigate(['/ProductsEdit']);
          // Remove the deleted product from the collection if needed
        },
        (error: any) => {
          console.error('Failed to delete product:', error);
        }
      );
    }
  }
  editpage(productId:number){
    this.router.navigate([`/edit/${productId}`]);
  }
}
