import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderItem } from '../model/order-item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders : Order[] = [];


 

  ordersUpdated = new Subject<Order[]>();
 // orderItemsUpdated = new Subject<OrderItem[]>();


 options = {
  headers: new HttpHeaders(
    { 
      'content-type': 'application/json',
      'authorization' : 'Bearer ' + localStorage.getItem('token') || ''
    }
  )
};


  baseUrl = "https://localhost:7200/api/Orders";

  constructor(private http : HttpClient) { }

  getOrders(){
    this.http.get<Order[]>(this.baseUrl, this.options).subscribe(
      orders => {
        this.orders = orders;
        this.ordersUpdated.next([...this.orders]);
      }
    );
  }

  getOrderById(id : number) : Order | undefined {
    return this.orders.find(o=>o.id === id)
   // return this.http.get<Category>(this.baseUrl+"/"+id);
    
  }

  getOrdersPagination(pageNumber : number, pageSize : number)
  {
    this.http.get<Order[]>(this.baseUrl+"/"+pageNumber +"/"+pageSize, this.options).subscribe(
      orders => {
        this.orders = orders;
        this.ordersUpdated.next([...this.orders]);
      }
    );
  }
 
  editOrder(order : Order) {
    const id = order.id
    this.http.put<Order>(this.baseUrl+"/"+id, order, this.options).subscribe(
      order => {
      this.orders = this.orders.map(
        o=>o.id === order.id?order:o
      );
      this.ordersUpdated.next([...this.orders]);
    }
    );
  }

  deleteOrder(id : number){
    this.http.delete<Order>(this.baseUrl +"/"+id, this.options).subscribe(
    order => {
    this.orders = this.orders.filter(c=>c.id !== id);
    this.ordersUpdated.next([...this.orders]);
    }
    );
  }


  
  addOrder(orderNumber : string, orderDate : Date, orderStatus : string, userId : number){
    const options = {
      headers: new HttpHeaders(
        { 'content-type': 'application/json',
        'authorization' : 'Bearer ' + localStorage.getItem('token') || ''
      }
      )
    };
    this.http.post<Order>(
      this.baseUrl,
      JSON.stringify({
        OrderNumber : orderNumber,
        OrderDate : orderDate,
        OrderStatus : orderStatus,
        UserId : userId
      }),
      options
      )
      .subscribe(
        order => {
          this.orders.push(order);
          this.ordersUpdated.next([...this.orders]);
        }
      )
  }
}
