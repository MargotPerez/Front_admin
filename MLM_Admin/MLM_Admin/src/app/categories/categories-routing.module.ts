import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { authGuard } from '../shared/auth.guard';

const routes: Routes = [
  {path : "", component : ListCategoriesComponent, pathMatch : "full", canActivate : [authGuard]},
  {path : "add", component : AddCategoryComponent, canActivate : [authGuard]},
  {path : "edit/:id", component : EditCategoryComponent, canActivate : [authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
