import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';



@NgModule({
  declarations: [
    AddCategoryComponent,
    EditCategoryComponent,
    ListCategoriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoriesModule { }
