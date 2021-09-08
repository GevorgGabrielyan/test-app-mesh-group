import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products.component";
import {ProductsListComponent} from "./components/products-list/products-list.component";
import {ProductCreateEditComponent} from "./components/product-create-edit/product-create-edit.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: ProductsListComponent
      },
      {
        path: 'create',
        component: ProductCreateEditComponent
      },
      {
        path: 'edit/:id',
        component: ProductCreateEditComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class ProductsRoutingModule { }
