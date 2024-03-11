import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditUserComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
