import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartListComponent } from './cart/cart-list.component';
import { ProductRoutingPageModule } from './product.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-display/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from '../state/product/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '../state/product/product.effects';

@NgModule({
  declarations: [
    CartListComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingPageModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forFeature('products',productReducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductModule { }