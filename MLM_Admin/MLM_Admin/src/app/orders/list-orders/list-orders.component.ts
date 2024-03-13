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
  filteredOrders? : Order[];

  constructor(private orderService : OrderService){}

  deleteOrder(id : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer cette commande ?"))
      this.orderService.deleteOrder(id);
  }

  filterOrders(keyword : string){
    this.filteredOrders = this.orders!.filter(
      o=>o.orderNumber.toLowerCase().includes(keyword.toLowerCase())
    );
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
