import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { DetailProductComponent } from './detail-product/detail-product.component';



@NgModule({
  declarations: [
    AddProductComponent,
    EditProductComponent,
    ListProductsComponent,
    DetailProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
