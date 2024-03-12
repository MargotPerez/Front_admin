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

  baseUrl = "https://localhost:7200/api/Orders";

  constructor(private http : HttpClient) { }

  getOrders(){
    this.http.get<Order[]>(this.baseUrl).subscribe(
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


 /* getOrderItems(order : Order){
    const id = order.id
    this.http.get<Order>(this.baseUrl+"/"+id).subscribe(
      order => {
        this.orderItems = order.orderItems;
        this.orderItemsUpdated.next([...this.orderItems]);
      }
    );
    console.log(this.orderItemsUpdated)
    return this.orderItemsUpdated
  }
*/
  editOrder(order : Order) {
    const id = order.id
    this.http.put<Order>(this.baseUrl+"/"+id, order).subscribe(
      order => {
      this.orders = this.orders.map(
        o=>o.id === order.id?order:o
      );
      this.ordersUpdated.next([...this.orders]);
    }
    );
  }

  deleteOrder(id : number){
    this.http.delete<Order>(this.baseUrl +"/"+id).subscribe(
    order => {
    this.orders = this.orders.filter(c=>c.id !== id);
    this.ordersUpdated.next([...this.orders]);
    }
    );
  }


  
  addOrder(orderNumber : string, orderDate : Date, orderStatus : string){
    const options = {
      headers: new HttpHeaders(
        { 'content-type': 'application/json'}
      )
    };
    this.http.post<Order>(
      this.baseUrl,
      JSON.stringify({
        OrderNumber : orderNumber,
        OrderDate : orderDate,
        OrderStatus : orderStatus,
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
