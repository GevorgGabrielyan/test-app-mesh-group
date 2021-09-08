import { Component, Input } from '@angular/core';
import { IHeaderAction } from "../../../../core/interfaces";
import {LocationStrategy} from "@angular/common";

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss']
})
export class ProductsHeaderComponent {
  @Input()
  public title = '';

  @Input()
  public actions: IHeaderAction[] = []

  @Input()
  public showBackBtn = false

  constructor(private locationStrategy: LocationStrategy) { }

  public back(): void {
    this.locationStrategy.back();
  }
}
