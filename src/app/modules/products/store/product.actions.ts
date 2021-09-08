import { Injectable } from '@angular/core';

import { createAction, props, Store } from '@ngrx/store';

import { IProductsState } from './product.state';
import { IProduct } from "../../../core/interfaces";

export const GET_PRODUCTS_COMMAND = createAction(
  '[Products] GET_PRODUCTS_COMMAND',
);

export const GET_PRODUCTS_SUCCESS = createAction(
  '[Products] GET_PRODUCTS_SUCCESS',
  props<{
    products: IProduct[];
  }>(),
);

export const GET_PRODUCT_COMMAND = createAction(
  '[Products] GET_PRODUCT_COMMAND',
  props<{
    id: string;
  }>(),
);

export const GET_PRODUCT_SUCCESS = createAction(
  '[Products] GET_PRODUCT_SUCCESS',
  props<{
    product: IProduct;
  }>(),
);

export const CREATE_PRODUCT_COMMAND = createAction(
  '[Products] CREATE_PRODUCT_COMMAND',
  props<{
    product: IProduct;
  }>(),
);

export const CREATE_PRODUCT_SUCCESS = createAction(
  '[Products] CREATE_PRODUCT_SUCCESS',
  props<{
    product: IProduct;
  }>(),
);

export const UPDATE_PRODUCT_COMMAND = createAction(
  '[Products] UPDATE_PRODUCT_COMMAND',
  props<{
    id: string;
    product: IProduct;
  }>(),
);

export const UPDATE_PRODUCT_SUCCESS = createAction(
  '[Products] UPDATE_PRODUCT_SUCCESS',
  props<{
    product: IProduct;
  }>(),
);

export const REMOVE_PRODUCT_COMMAND = createAction(
  '[Products] REMOVE_PRODUCT_COMMAND',
  props<{
    id: string;
  }>(),
);

export const REMOVE_PRODUCT_SUCCESS = createAction(
  '[Products] REMOVE_PRODUCT_SUCCESS',
  props<{
    id: string;
  }>(),
);

export const PRODUCTS_ACTIONS_FAILURE = createAction(
  '[Products] PRODUCTS_ACTIONS_FAILURE',
  props<{ error: any }>(),
);

@Injectable()
export class ProductActions {
  constructor(private store$: Store<IProductsState>) {}

  public getProducts(): void {
    this.store$.dispatch(GET_PRODUCTS_COMMAND());
  }

  public getProduct(id: string): void {
    this.store$.dispatch(GET_PRODUCT_COMMAND({ id }));
  }

  public createProducts(product: IProduct): void {
    this.store$.dispatch(CREATE_PRODUCT_COMMAND({ product }));
  }

  public removeProduct(id: string): void {
    this.store$.dispatch(REMOVE_PRODUCT_COMMAND({ id }));
  }

  public updateProducts(product: IProduct, id: string): void {
    this.store$.dispatch(UPDATE_PRODUCT_COMMAND({ id, product }));
  }
}
