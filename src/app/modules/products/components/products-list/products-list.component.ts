import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';

import { ProductActions, ProductSelectors } from "../../store";
import { IHeaderAction, IProduct } from "../../../../core/interfaces";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public products$: Observable<IProduct[]> = this.productSelectors.selectProducts()

  public loading$: Observable<boolean> = this.productSelectors.selectLoading()

  public actions: IHeaderAction[] = [
    {
      title: 'Create Product',
      class: 'btn-primary',
      action: () => {
        return this.router.navigate(['/products', 'create'])
      }
    }
  ]

  constructor(
    private router: Router,
    private productActions: ProductActions,
    private productSelectors: ProductSelectors
  ) { }

  ngOnInit(): void {
    this.productActions.getProducts()
  }

  public removeProduct(id: string) {
    this.productActions.removeProduct(id)
  }

}
