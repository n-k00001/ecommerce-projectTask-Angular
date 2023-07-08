import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: IProduct[] = [];
  producrCart: IProduct[]=[];
  constructor() { 
    this.productList = [
      {
        id:2,
        Quantity:1,
        Img:"https://www.footcourt-eg.com/cdn/shop/products/converse-chuck-taylor-all-star-lugged-304862.jpg?v=1679081232&width=720",
        Name: 'CONVERSE CHUCK',
        Price: 55,
        CayogryId: 2,
        isPurchased: false 
      },
      {
        id:3,
        Quantity:0,
        Img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQPGcwDpWwc6HnXeMK2vMKkOcrIRpJGkF_1jTbxbdD91oImuJIL3M8tsu20l_RrHXFYlpHcJ02Qw7qmXllGwexCfiyTCKcgngPGWKmficAUJZugiie5t1YXfpOryZP--shcvg&usqp=CAc",
        Name: 'T-shirt',
        Price: 20,
        CayogryId: 1,
        isPurchased: false 
      },
      {
        id:4,
        Quantity:20,
        Img:"https://m.media-amazon.com/images/I/61wfyl8vSqL._AC_UL480_FMwebp_QL65_.jpg",
        Name: 'Travel Bag',
        Price: 30,
        CayogryId: 3,
        isPurchased: false 
      },
      {
        id:5,
        Quantity:20,
        Img:"https://m.media-amazon.com/images/I/71E7FEbuIGL._AC_UL480_FMwebp_QL65_.jpg",
        Name: 'Laptop Bag',
        Price: 100,
        CayogryId: 3,
        isPurchased: false 
      },
      {
        id:6,
        Quantity:0,
        Img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRnXQsubAMB4ab9X0lfloT5LUmUAgr1jAfuoglPmarkLml4yQ238BmVND9tBPkR9zw3eMgQ4f3RXdM6BlJcP_9Q0HkQFskrzHHR6b7nl8durY_M6v0G-t0hu4KLCvZ-xCLiVg&usqp=CAc",
        Name: 'T-shirt',
        Price: 50,
        CayogryId: 1,
        isPurchased: false 
      },
      {
        id:7,
        Quantity:5,
        Img:"https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/61/089212/1.jpg?7907",
        Name: ' Baguette Bag',
        Price: 150,
        CayogryId: 3,
        isPurchased: false 
      },
      {
        id:8,
        Quantity:20,
        Img:"data:image/jpeg;base64,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",
        Name: 'Nike Air',
        Price: 150,
        CayogryId: 2,
        isPurchased: false 
      },
      {
        id:9,
        Quantity:15,
        Img:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1a7f9cad-5c96-446f-a9d5-2dfb9c34910f/cosmic-unity-2-basketball-shoes-L53XJP.png",
        Name: 'Basketball Shoes',
        Price: 120,
        CayogryId: 2,
        isPurchased: false 
      }
    ];
  }
  
  getAllProduct():IProduct[]{
    return this.productList;
  }

  getProductsByCatID(catID: number): IProduct[] {
    return this.productList.filter(product => product.CayogryId === catID);
  }


  getProductByID(prodID: number): IProduct|undefined {
    return this.productList.find(product => product.id === prodID);
  }
}
