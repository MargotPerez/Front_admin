import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { Subscription } from 'rxjs';
import { OrderItem } from '../model/order-item';
import { OrderService } from '../services/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.css']
})
export class DetailsOrderComponent implements OnInit {
  //orderId! : number ;
  order? : Order;
  orderItems? : OrderItem[] = [];

  ordersSubscription? : Subscription

  totalPrice? : number = 0;

  constructor(private orderService : OrderService, private route:ActivatedRoute){}

  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
    const id = params['id']
  
    this.order = this.orderService.getOrderById(+id)
    if (this.order) {
      this.orderItems = this.order.orderItems;
      this.totalPrice = this.orderItems.reduce((total: number, orderitem: OrderItem) => total + (orderitem.quantity * orderitem.price), 0);
    }
  });
  
  }

}