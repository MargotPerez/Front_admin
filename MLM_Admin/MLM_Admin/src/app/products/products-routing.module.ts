import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from '../categories/list-categories/list-categories.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { EditCategoryComponent } from '../categories/edit-category/edit-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path : "", component : ListProductsComponent, pathMatch : "full"},
  {path : "edit/:id", component : EditProductComponent},
  {path : "add", component : AddProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
