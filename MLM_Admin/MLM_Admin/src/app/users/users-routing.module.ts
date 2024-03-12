import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { authGuard } from '../shared/auth.guard';

const routes: Routes = [
  {path : "", component : ListUsersComponent, pathMatch : "full", canActivate : [authGuard]},
  {path : "edit/:id", component : EditUserComponent, canActivate : [authGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
