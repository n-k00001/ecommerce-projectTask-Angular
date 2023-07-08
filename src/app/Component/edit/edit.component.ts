import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICatogry } from 'src/app/Models/icatogry';
import { IProduct } from 'src/app/Models/iproduct';
import { CatogriesService } from 'src/app/Services/catogries.service';
import { ProductAPIService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  product!: IProduct;
  categories!: ICatogry[];
  constructor(private productApi: ProductAPIService, private route: ActivatedRoute,private router: Router,private catogriesApi: CatogriesService) {

  }
  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('productID'));
    this.productApi.getProductById(productId).subscribe(
      (product:IProduct)=>{
        this.product = product
        console.log(product);
      },
      (error:any)=>{
        console.error('Failed to fetch product:', error);
      }
    );
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
  updateProduct(){
    this.productApi.updateProduct(this.product).subscribe(
      (updatedProduct: IProduct) => {
        console.log('Product updated:', updatedProduct);
        this.router.navigate(['/ProductsEdit']);
      },
      (error: any) => {
        console.error('Failed to update product:', error);
      }
    );
  }
}
