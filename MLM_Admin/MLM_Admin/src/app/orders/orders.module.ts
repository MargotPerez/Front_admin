import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOrderComponent } from './add-order/add-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';



@NgModule({
  declarations: [
    AddOrderComponent,
    EditOrderComponent,
    ListOrdersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
