import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders : Order[] = [];

  ordersUpdated = new Subject<Order[]>();
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

}
