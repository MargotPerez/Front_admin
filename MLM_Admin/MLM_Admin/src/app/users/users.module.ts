import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { FormsModule } from '@angular/forms';
import { SearchUserComponent } from './search-user/search-user.component';


@NgModule({
  declarations: [
    EditUserComponent,
    ListUsersComponent,
    SearchUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
