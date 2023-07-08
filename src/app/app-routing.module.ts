import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Component/products/products.component';
import { ContactComponent } from './Component/contact/contact.component';
import { AboutusComponent } from './Component/aboutus/aboutus.component';
import { MainComponent } from './Component/main/main.component';
import { NotFoundPageComponent } from './Component/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { CartComponent } from './Component/cart/cart.component';
import { InsertProductComponent } from './Component/insert-product/insert-product.component';
import { UserRegistrationComponent } from './Component/user-registration/user-registration.component';
import { InsertProductFormComponent } from './Component/insert-product-form/insert-product-form.component';
import { ProductsEditComponent } from './Component/products-edit/products-edit.component';
import { EditComponent } from './Component/edit/edit.component';

const routes: Routes = [
  {path:"",component:MainComponent,title:"home page"},
  {path:"Home",component:MainComponent,title:"home page"},
  {path:"Products",component:ProductsComponent,title:"products list page"},
  {path:"Contact",component:ContactComponent,title:"contact page"},
  {path:"About us",component:AboutusComponent,title:"aboutus page"},
  {path:"Cart",component:CartComponent,title:"cart page"},
  { path: 'ProductsEdit', component:ProductsEditComponent,title:" productall to edit"},
  { path: 'admin/insertproduct', component:InsertProductFormComponent,title:"add product form"},
  {path:"productde/:productID",component:ProductDetailsComponent,title:"product details page"},
  { path: 'edit/:productID', component:EditComponent,title:"edit product form"},
  { path: 'register', component:UserRegistrationComponent,title:"register product"},
  {path:"**",component:NotFoundPageComponent,title:"notfound page"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
