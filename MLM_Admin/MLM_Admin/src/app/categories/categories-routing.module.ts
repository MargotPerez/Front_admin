import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';

const routes: Routes = [
  {path : "", component : ListCategoriesComponent, pathMatch : "full"},
  {path : "add", component : AddCategoryComponent},
  {path : "edit/:id", component : EditCategoryComponent}
  //{path : "", redirectTo : "categories", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
