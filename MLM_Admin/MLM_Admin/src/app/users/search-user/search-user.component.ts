import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent {

  @Output() searchUserEvent = new EventEmitter<string>();

  searchUser(keyword : string){
    this.searchUserEvent.emit(keyword);
  }
}
