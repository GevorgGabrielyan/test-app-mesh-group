import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

import { IProductsState } from "./product.state";
import { IProduct } from "../../../core/interfaces";


export const selectProductsState = createFeatureSelector<IProductsState>(
  'products',
);

export const selectProducts = createSelector(
  selectProductsState,
  (state: IProductsState) => state.products,
);

export const selectProduct = createSelector(
  selectProductsState,
  (state: IProductsState) => state.selectedProduct,
);

export const selectLoading = createSelector(
  selectProductsState,
  (state: IProductsState) => state.isLoading,
);


@Injectable()
export class ProductSelectors {
  constructor(private store: Store<IProductsState>) {}

  selectProducts(): Observable<IProduct[]> {
    return this.store.select(selectProducts);
  }

  selectProduct(): Observable<IProduct | null> {
    return this.store.select(selectProduct);
  }

  selectLoading(): Observable<boolean> {
    return this.store.select(selectLoading);
  }
}
