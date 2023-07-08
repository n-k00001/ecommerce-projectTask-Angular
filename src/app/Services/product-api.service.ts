import { HttpClient , HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IProduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment.development';
import { ICatogry } from '../Models/icatogry';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {
  producrCart: IProduct[]=[];
  private http={};
  constructor(private httpclient:HttpClient) 
  {
    this.http={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        //'Authorization': 'Access-token'
      })
    };
  }
  getAllProduct():Observable<IProduct[]>
  {
    return this.httpclient.get<IProduct[]>(`${environment.BaseApiUrl}/products`)
  }
  getAllCatogries():Observable<ICatogry[]>
  {
    return this.httpclient.get<ICatogry[]>(`${environment.BaseApiUrl}/catogryList`)
  }
  getProductById(proId:number):Observable<IProduct>
  {
    return this.httpclient.get<IProduct>(`${environment.BaseApiUrl}/products/${proId}`)
  }
  getProductsByCatID(catID:number):Observable<IProduct[]>
  {
    return this.httpclient.get<IProduct[]>(`${environment.BaseApiUrl}/products?CayogryId=${catID}`)
  }

  addProduct(product: IProduct): Observable<any> {
    console.log(product)
    return this.httpclient.post(`${environment.BaseApiUrl}/products`, JSON.stringify(product),this.http);
  }

  deleteProduct(productId:number):Observable<IProduct>
  {
    return this.httpclient.delete<IProduct>(`${environment.BaseApiUrl}/products/${productId}`);
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.httpclient.put<IProduct>(`${environment.BaseApiUrl}/products/${product.id}`, product).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return this.addProduct(product);
        }
        return throwError(error);
      })
    );
  }
}
