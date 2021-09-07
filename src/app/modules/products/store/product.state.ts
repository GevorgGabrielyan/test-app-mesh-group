import { IProduct } from "../../../core/interfaces";

export interface IProductsState {
  error: any;
  isLoading: boolean;
  products: IProduct[];
  selectedProduct: IProduct | null;
}

export const initialProductsState: IProductsState = {
  error: null,
  isLoading: false,
  products: [],
  selectedProduct: null,
};
