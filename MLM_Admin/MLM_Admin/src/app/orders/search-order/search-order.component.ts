import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent {
  @Output() searchOrderEvent = new EventEmitter<string>();

  searchOrder(keyword : string){
    this.searchOrderEvent.emit(keyword);
  }
}
