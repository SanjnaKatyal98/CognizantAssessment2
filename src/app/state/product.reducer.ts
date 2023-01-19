import { createReducer, on } from "@ngrx/store";
import { initialState } from "./product.state";
import { ProductState } from "./product.state";
import * as ProductActions from './product.actions'

export const productReducer = createReducer<ProductState>(
  initialState,
  
  on(ProductActions.setCurrentProduct, (state, action): ProductState => {
    return {
      ...state,
      currentProductId: action.currentProductId
    };
  }),
  on(ProductActions.clearCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: null
    };
  }),
  on(ProductActions.initializeCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: 0
    };
  }),
  on(ProductActions.loadProductsSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products,
      error: ''
    };
  }),
  on(ProductActions.loadProductsFailure, (state, action): ProductState => {
    return {
      ...state,
      products: [],
      error: action.error
    };
  }),
  on(ProductActions.updateProductSuccess, (state, action): ProductState => {
    const updatedProducts = state.products.map(
      item => action.product.id === item.id ? action.product : item);
    return {
      ...state,
      products: updatedProducts,
      currentProductId: action.product.id,
      error: ''
    };
  }),
  on(ProductActions.updateProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error
    };
  }),
  // After a create, the currentProduct is the new product.
  on(ProductActions.createProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: [...state.products, action.product],
      currentProductId: action.product.id,
      error: ''
    };
  }),
  on(ProductActions.createProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error
    };
  }),
  // After a delete, the currentProduct is null.
  on(ProductActions.deleteProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: state.products.filter(product => product.id !== action.productId),
      currentProductId: null,
      error: ''
    };
  }),
  on(ProductActions.deleteProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error
    };
  })
);