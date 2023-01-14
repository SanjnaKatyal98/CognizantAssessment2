import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CartListComponent } from './product/cart/cart-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomePageComponent},
  {path:'nav',component:NavbarComponent},
  {path:'contact us',component:ContactUsComponent},
  {path:'about us',component:AboutUsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'products',component:ProductListComponent,
    loadChildren:()=>import('./product/product.module').then((m)=>m.ProductModule),
    //component:ProductComponent,
    //canActivate: [AuthGuard],
    //children:[{path:'addProduct',component:ProductAddComponent}]
  },
  {path:'cart',component:CartListComponent},
  {path:'addProduct',component:ProductAddComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }