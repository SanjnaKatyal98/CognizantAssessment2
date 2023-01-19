import { createFeatureSelector, createSelector, createReducer, on } from '@ngrx/store';
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
        price:0,
        image:'',
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