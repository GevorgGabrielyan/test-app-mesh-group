import { Action, createReducer, on } from '@ngrx/store';

import * as productsActions from './product.actions';
import { IProductsState, initialProductsState } from './product.state';
import {REMOVE_PRODUCT_COMMAND} from "./product.actions";

const createProductsReducer = createReducer(
  initialProductsState,
  on(
    productsActions.GET_PRODUCTS_COMMAND,
    (state): IProductsState => ({
      ...state,
      isLoading: true
    }),
  ),
  on(
    productsActions.GET_PRODUCTS_SUCCESS,
    (state, { products }): IProductsState => ({
      ...state,
      products,
      isLoading: false,
    }),
  ),
  on(
    productsActions.GET_PRODUCT_COMMAND,
    (state): IProductsState => ({
      ...state,
      isLoading: true
    }),
  ),
  on(
    productsActions.GET_PRODUCT_SUCCESS,
    (state, { product }): IProductsState => ({
      ...state,
      selectedProduct: product,
      isLoading: false,
    }),
  ),
  on(
    productsActions.CREATE_PRODUCT_COMMAND,
    (state): IProductsState => ({
      ...state,
      isLoading: true
    }),
  ),
  on(
    productsActions.CREATE_PRODUCT_SUCCESS,
    (state, { product }): IProductsState => ({
      ...state,
      selectedProduct: product,
      isLoading: false,
    }),
  ),
  on(
    productsActions.UPDATE_PRODUCT_COMMAND,
    (state): IProductsState => ({
      ...state,
      isLoading: true
    }),
  ),
  on(
    productsActions.UPDATE_PRODUCT_SUCCESS,
    (state, { product }): IProductsState => ({
      ...state,
      selectedProduct: product,
      isLoading: false,
    }),
  ),
  on(
    productsActions.REMOVE_PRODUCT_COMMAND,
    (state): IProductsState => ({
      ...state,
      isLoading: true
    }),
  ),
  on(
    productsActions.REMOVE_PRODUCT_SUCCESS,
    (state, { id }): IProductsState => ({
      ...state,
      products: state.products.filter(item => item.id !== id),
      isLoading: false,
    }),
  ),
  on(
    productsActions.PRODUCTS_ACTIONS_FAILURE,
    (state, { error }): IProductsState => ({
      ...state,
      isLoading: false,
      error,
    }),
  ),
);

export function productsReducer(
  state: IProductsState | undefined,
  action: Action,
): IProductsState {
  return createProductsReducer(state, action);
}
