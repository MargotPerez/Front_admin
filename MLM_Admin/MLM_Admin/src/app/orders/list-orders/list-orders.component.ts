import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { Subscription } from 'rxjs';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit{
  orders : Order[] = [];
  ordersSubscription? : Subscription

  constructor(private orderService : OrderService){}

  deleteOrder(id : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer cette commande ?"))
      this.orderService.deleteOrder(id);
  }


  ngOnInit(): void {
    this.orderService.getOrders();

    this.ordersSubscription = this.orderService.ordersUpdated.subscribe(
      orders => {
        this.orders = orders;

      }
    );
  }
}
