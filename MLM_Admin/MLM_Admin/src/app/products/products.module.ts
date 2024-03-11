import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddProductComponent,
    EditProductComponent,
    ListProductsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
