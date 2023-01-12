import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductComponent } from "./product-display/product.component";



const routes: Routes =[
    {path:'', component:ProductComponent,
    // canActivate: [AuthGuard],
      children:[{path:'addProduct',component:ProductAddComponent}]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingPageModule { }