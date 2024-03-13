import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { AddOrderComponent } from './add-order/add-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { FormsModule } from '@angular/forms';
import { DetailsOrderComponent } from './details-order/details-order.component';
import { SearchOrderComponent } from './search-order/search-order.component';


@NgModule({
  declarations: [
    AddOrderComponent,
    EditOrderComponent,
    ListOrdersComponent,
    DetailsOrderComponent,
    SearchOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule
  ]
})
export class OrdersModule { }
