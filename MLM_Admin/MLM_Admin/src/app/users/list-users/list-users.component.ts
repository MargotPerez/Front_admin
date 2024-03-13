import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users : User[] = [];
  usersSubscription? : Subscription
  filteredUsers? : User[];

  constructor(private userService : UserService){}

  deleteUser(id : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer cet utilisateur ?"))
      this.userService.deleteUser(id);
  }
  
  filterUsers(keyword : string){
    this.filteredUsers = this.users!.filter(
      u=>u.firstName.toLowerCase().includes(keyword.toLowerCase()) || u.lastName.toLowerCase().includes(keyword.toLowerCase()) || u.mail.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.userService.getUsers();

    this.usersSubscription = this.userService.usersUpdated.subscribe(
      users => {
        this.users = users;
        console.log(this.users)
      }
    );
  }
}
