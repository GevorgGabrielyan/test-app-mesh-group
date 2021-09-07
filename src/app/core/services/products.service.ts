import { Observable } from "rxjs";
import { IProduct } from "../interfaces";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = '/products'

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}`)
  }

  public createProducts(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.url}`, product)
  }

  public updateProducts(id: string, product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.url}/${id}`, product)
  }

  public removeProducts(id: string) {
    return this.http.delete(`${this.url}/${id}`)
  }

  public getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}/${id}`,)
  }
}
