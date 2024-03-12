import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { DetailsOrderComponent } from './details-order/details-order.component';
import { authGuard } from '../shared/auth.guard';

const routes: Routes = [
  {path : "", component : ListOrdersComponent, pathMatch : "full", canActivate : [authGuard]},
  {path : "add", component : AddOrderComponent, canActivate : [authGuard]},
  {path : "edit/:id", component : EditOrderComponent, canActivate : [authGuard]},
  {path : ":id/details", component : DetailsOrderComponent, canActivate : [authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
