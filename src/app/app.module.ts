import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//components created
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './user/login.component';
import { ProductsListComponent } from './Products/products-list.component';
import { CartComponent } from './cart/cart.component';
//needed modules
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductAddComponent } from './Products/product-add.component';
import { DbService } from 'shared/inmemoryeventdbservice';
import { ProductEditComponent } from './Products/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    PaymentComponent,
    RegisterComponent,
    HomePageComponent,
    NavbarComponent,
    LoginComponent,
    CartComponent,
    ProductsListComponent,
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(DbService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
