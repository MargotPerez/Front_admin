import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { OrderService } from '../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  order? : Order ;
  public status : string [] = ['En attente','Envoyée','Livrée']

  constructor(
    private orderService : OrderService, 
    private router : Router,
    private activatedRoute : ActivatedRoute
  ){}
  
  editOrder(f : NgForm){
    this.order!.orderNumber = f.value.orderNumber;
    this.order!.orderDate = f.value.orderDate;
    this.order!.orderStatus = f.value.orderStatus;
    this.orderService.editOrder(this.order!);
    this.router.navigate(['/orders']);
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      parametres => {
        const id = parametres['id'];
        this.order = this.orderService.getOrderById(+id)
      });
  }
}
