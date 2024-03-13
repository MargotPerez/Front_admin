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

  currentPage: number = 1;
  itemsPerPage: number = 2; // Nombre d'éléments par page

  /********************************* */
  getCurrentPage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.orders.slice(startIndex, endIndex);
  }
   // Méthode pour aller à la page suivante
   nextPage() {
    this.currentPage++;
    console.log("nextPage")

  }

   // Méthode pour aller à la page précédente
   previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    console.log("previousPage")
  }
  onPageChange(pageNumber: number) {
    console.log("ca marche")
    this.currentPage = pageNumber;
    this.orderService.getOrdersPagination(this.currentPage,this.itemsPerPage);
  }
  /********************************* */



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
