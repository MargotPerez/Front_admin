import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { DetailsOrderComponent } from './details-order/details-order.component';

const routes: Routes = [
  {path : "", component : ListOrdersComponent, pathMatch : "full"},
  {path : "add", component : AddOrderComponent},
  {path : "edit/:id", component : EditOrderComponent},
  {path : ":id/details", component : DetailsOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
