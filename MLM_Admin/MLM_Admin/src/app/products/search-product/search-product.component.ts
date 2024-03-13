import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {

  @Output() searchProductEvent = new EventEmitter<string>();

  searchProduct(keyword : string){
   // console.log(keyword);
    this.searchProductEvent.emit(keyword);
  }
}
