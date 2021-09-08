import { NgModule } from '@angular/core';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { CommonModule } from "@angular/common";
import { ProductsRoutingModule } from "./products-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CoreModule } from "../../core/core.module";
import { ProductsComponent } from "./products.component";
import  {ProductActions, ProductEffects, ProductSelectors, productsReducer } from "./store";
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { ProductCreateEditComponent } from './components/product-create-edit/product-create-edit.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsHeaderComponent,
    ProductCreateEditComponent
  ],
  imports: [
    CoreModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    EffectsModule.forRoot([ProductEffects]),
    StoreModule.forRoot({ products: productsReducer })
  ],
  providers: [ProductActions, ProductSelectors]
})
export class ProductsModule { }
