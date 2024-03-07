import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUsersComponent } from './list-users/list-users.component';



@NgModule({
  declarations: [
    EditUserComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
