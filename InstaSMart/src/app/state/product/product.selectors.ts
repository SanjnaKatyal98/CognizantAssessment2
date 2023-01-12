import { createFeatureSelector, createSelector, createReducer, on } from '@ngrx/store';
import { Categories } from 'src/app/product/product-list/product';
import * as AppState from '../../state/app.state';
import { initialState } from './product.state';
import { ProductState } from './product.state';


// Selector functions
const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getCurrentProductId = createSelector(
  getProductFeatureState,
  state => state.currentProductId
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  getCurrentProductId,
  (state, currentProductId) => {

    if (currentProductId === 0) {
      return {
        id:0,
        name:'',
        category:Categories.Food,
        price:0,
        image:'',
        rating:1,
        qty:0
      };
    } else {
      return currentProductId ? state.products.find(p => p.id === currentProductId) : null;
    }
  }
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);

export const getError = createSelector(
  getProductFeatureState,
  state => state.error
);