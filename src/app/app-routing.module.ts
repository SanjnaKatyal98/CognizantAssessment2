import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components created
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './user/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsListComponent } from './Products/products-list.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductAddComponent } from './Products/product-add.component';
import { ProductEditComponent } from './Products/product-edit.component';

//routing
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomePageComponent},
  {path:'nav',component:NavbarComponent},
  {path:'contact us',component:ContactUsComponent},
  {path:'about us',component:AboutUsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'products',component:ProductsListComponent},
  {path:'cart',component:CartComponent},
  {path:'addProduct',component:ProductAddComponent},
  {path:'editProduct',component:ProductEditComponent},
  {path:'payment',component:PaymentComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
