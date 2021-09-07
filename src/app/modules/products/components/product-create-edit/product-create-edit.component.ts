import { Observable } from "rxjs";
import { filter, first } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { IProduct } from "../../../../core/interfaces";
import { ProductActions, ProductSelectors } from "../../store";

@Component({
  selector: 'app-product-create-edit',
  templateUrl: './product-create-edit.component.html',
  styleUrls: ['./product-create-edit.component.scss']
})
export class ProductCreateEditComponent implements OnInit {
  public pageTitle = 'Product Create';

  public selectedProductId = '';

  public loading$: Observable<boolean> = this.productSelectors.selectLoading()

  public productForm: FormGroup | undefined;

  constructor(
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private productActions: ProductActions,
    private productSelectors: ProductSelectors
  ) { }

  ngOnInit(): void {
    this.selectedProductId = this.activateRoute.snapshot.params?.id;

    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      description: ['', [Validators.minLength(2), Validators.maxLength(2000)]],
      cost: ['', [Validators.required, Validators.min(0.01)]],
      weight: [''],
      code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    })
    if (this.selectedProductId) {
      this.pageTitle = 'Edit Product'
      this.productActions.getProduct(this.selectedProductId);
      this.productSelectors.selectProduct().pipe(filter(Boolean), first()).subscribe(res => {
        this.productForm?.patchValue(res as IProduct)
      })
    }

  }

  public submitForm(): void {
    if (this.productForm?.invalid) {
      return;
    }
    if (this.selectedProductId) {
      this.productActions.updateProducts(this.productForm?.value, this.selectedProductId);
      return;
    }
    this.productActions.createProducts(this.productForm?.value)
  }
}
