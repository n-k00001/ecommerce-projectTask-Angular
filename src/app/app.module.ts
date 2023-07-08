import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ProductsComponent } from './Component/products/products.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { CreditCardFormatPipe } from './Pipe/credit-card-format.pipe';
import { ProductCardDirective } from './directive/product-card.directive';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './Component/contact/contact.component';
import { AboutusComponent } from './Component/aboutus/aboutus.component';
import { MainComponent } from './Component/main/main.component';
import { NotFoundPageComponent } from './Component/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { ProducrParentComponent } from './Component/producr-parent/producr-parent.component';
import { CartComponent } from './Component/cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import { InsertProductComponent } from './Component/insert-product/insert-product.component';
import { UserRegistrationComponent } from './Component/user-registration/user-registration.component'
import { ReactiveFormsModule } from '@angular/forms';
import { InsertProductFormComponent } from './Component/insert-product-form/insert-product-form.component';
import { ProductsEditComponent } from './Component/products-edit/products-edit.component';
import { EditComponent } from './Component/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SidebarComponent,
    CreditCardFormatPipe,
    ProductCardDirective,
    ContactComponent,
    AboutusComponent,
    MainComponent,
    NotFoundPageComponent,
    ProductDetailsComponent,
    ProducrParentComponent,
    CartComponent,
    InsertProductComponent,
    UserRegistrationComponent,
    InsertProductFormComponent,
    ProductsEditComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
