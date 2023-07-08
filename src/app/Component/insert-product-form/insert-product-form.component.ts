import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ICatogry } from 'src/app/Models/icatogry';
import { IProduct } from 'src/app/Models/iproduct';
import { CatogriesService } from 'src/app/Services/catogries.service';
import { ProductAPIService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-insert-product-form',
  templateUrl: './insert-product-form.component.html',
  styleUrls: ['./insert-product-form.component.css']
})
export class InsertProductFormComponent {
  categories!: ICatogry[];
  product!: IProduct;
  constructor(private productApi:ProductAPIService, private catogriesApi: CatogriesService){

  }

  productForm = new FormGroup({
    Name: new FormControl(''),
    CayogryId: new FormControl(''),
    Img: new FormControl(''),
    Price: new FormControl(''),
    Quantity: new FormControl('')
  });
  ngOnInit() {
    this.catogriesApi.getAllCatogries().subscribe(
      (categories: ICatogry[]) => {
        this.categories = categories;
        console.log(this.categories)
      },
      (error: any) => {
        console.error('Failed to fetch categories:', error);
      }
    );
  }

  addProduct() {
    console.log(Number(this.productForm.value.CayogryId));
    this.product = {
      id: 0,
      Name: this.productForm.value.Name || '',
      Quantity: Number(this.productForm.value.Quantity) || 0,
      Price: Number(this.productForm.value.Price) || 0,
      Img: this.productForm.value.Img || '',
      CayogryId: Number(this.productForm.value.CayogryId) || 0,
      isPurchased: false
    };
    
    console.log(this.product);
    this.productApi.addProduct(this.product).subscribe(
      (newProduct: IProduct) => {
        console.log('Product added:', newProduct);
        // Redirect to the products component on success
        // You can use the Router service for navigation
      },
      (error: any) => {
        console.error('Failed to add product:', error);
      }
    );
  }
}
