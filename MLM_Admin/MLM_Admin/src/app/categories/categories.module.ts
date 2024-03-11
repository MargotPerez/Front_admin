import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
//import { EditUserComponent } from './edit-user/edit-user.component';
//import { ListUsersComponent } from './list-users/list-users.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   // EditUserComponent,
   // ListUsersComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ListCategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule
  ]
})
export class CategoriesModule { }
