import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';


import * as productsActions from './product.actions';
import { ProductsService } from "../../../core/services/products.service";
import {IProduct} from "../../../core/interfaces";
import {PRODUCTS_ACTIONS_FAILURE} from "./product.actions";

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
  ) {}

  public getProductsEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(productsActions.GET_PRODUCTS_COMMAND),
      mergeMap(() => {
        return this.productsService
          .getProducts()
          .pipe(
            map((products: IProduct[]) => {
              return productsActions.GET_PRODUCTS_SUCCESS({ products });
            }),
            catchError(error =>
              of(productsActions.PRODUCTS_ACTIONS_FAILURE({ error })),
            ),
          );
      }),
    ),
  );

  public getProductEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(productsActions.GET_PRODUCT_COMMAND),
      mergeMap(data => {
        return this.productsService
          .getProduct(data.id)
          .pipe(
            map((product: IProduct) => {
              return productsActions.GET_PRODUCT_SUCCESS({ product });
            }),
            catchError(error =>
              of(productsActions.PRODUCTS_ACTIONS_FAILURE({ error })),
            ),
          );
      }),
    ),
  );

  public createProductEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(productsActions.CREATE_PRODUCT_COMMAND),
      mergeMap(data => {
        return this.productsService
          .createProducts(data.product)
          .pipe(
            map(() => {
              return productsActions.CREATE_PRODUCT_SUCCESS({ product: data.product });
            }),
            catchError(error =>
              of(productsActions.PRODUCTS_ACTIONS_FAILURE({ error })),
            ),
          );
      }),
    ),
  );

  public updateProductEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(productsActions.UPDATE_PRODUCT_COMMAND),
      mergeMap(data => {
        return this.productsService
          .updateProducts(data.id, data.product)
          .pipe(
            map(() => {
              return productsActions.UPDATE_PRODUCT_SUCCESS({ product: data.product });
            }),
            catchError(error =>
              of(productsActions.PRODUCTS_ACTIONS_FAILURE({ error })),
            ),
          );
      }),
    ),
  );

  public removeProductEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(productsActions.REMOVE_PRODUCT_COMMAND),
      mergeMap(data => {
        return this.productsService
          .removeProducts(data.id)
          .pipe(
            map(() => {
              return productsActions.REMOVE_PRODUCT_SUCCESS({ id: data.id });
            }),
            catchError(error =>
              of(productsActions.PRODUCTS_ACTIONS_FAILURE({ error })),
            ),
          );
      }),
    ),
  );
}
