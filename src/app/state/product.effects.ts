import { Injectable } from '@angular/core';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AppState from '../state/app.state';
import { ProductService } from 'shared/product.service';
/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './product.actions';

@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private productService: ProductService) { }

  loadProducts$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ProductActions.loadProducts),
        mergeMap(() => this.productService.getProducts()
          .pipe(
            map(products => ProductActions.loadProductsSuccess({ products })),
            catchError(error => of(ProductActions.loadProductsFailure({ error })))
          )
        )
      );
  });

  updateProduct$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ProductActions.updateProduct),
        concatMap(action =>
          this.productService.updateProd(action.product)
            .pipe(
              map(product => ProductActions.updateProductSuccess({ product })),
              catchError(error => of(ProductActions.updateProductFailure({ error })))
            )
        )
      );
  });

  createProduct$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ProductActions.createProduct),
        concatMap(action =>
          this.productService.createProd(action.product)
            .pipe(
              map(product => ProductActions.createProductSuccess({ product })),
              catchError(error => of(ProductActions.createProductFailure({ error })))
            )
        )
      );
  });

  deleteProduct$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ProductActions.deleteProduct),
        mergeMap(action =>
          this.productService.deleteProd(action.productId).pipe(
            map(() => ProductActions.deleteProductSuccess({ productId: action.productId })),
            catchError(error => of(ProductActions.deleteProductFailure({ error })))
          )
        )
      );
  });
}