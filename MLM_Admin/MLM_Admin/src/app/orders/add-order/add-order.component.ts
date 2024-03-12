import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit{
  orders : Order[] = [];
  status : string [] = ['En attente','Envoyée','Livrée']

  constructor(
    private orderService : OrderService, 
    private router : Router,
   ){}
  

  addOrder(f : NgForm){
    this.orderService.addOrder(f.value.orderNumber, f.value.orderDate, f.value.orderStatus);
    this.router.navigate(['/orders']); // CHANGER POUR QUE CA AILLE VERS L'AJOUT D'ORDERITEMS
  }

  
  ngOnInit(): void {
    this.orderService.ordersUpdated.subscribe(orders => this.orders = orders)
    this.orderService.getOrders();
    
  }

}
