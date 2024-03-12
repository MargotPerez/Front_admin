import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from '../categories/list-categories/list-categories.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { EditCategoryComponent } from '../categories/edit-category/edit-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { authGuard } from '../shared/auth.guard';

const routes: Routes = [
  {path : "", component : ListProductsComponent, pathMatch : "full", canActivate : [authGuard]},
  {path : "edit/:id", component : EditProductComponent, canActivate : [authGuard]},
  {path : "add", component : AddProductComponent, canActivate : [authGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
