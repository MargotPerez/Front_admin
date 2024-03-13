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

  currentPage: number = 1;
  itemsPerPage: number = 15; // Nombre d'éléments par page
  

  /********************************* */
  getCurrentPage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.users.slice(startIndex, endIndex);
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
    this.userService.getUsersPagination(this.currentPage,this.itemsPerPage);
  }
  /********************************* */

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
    this.userService.getUsersPagination(this.currentPage, this.itemsPerPage);

    this.usersSubscription = this.userService.usersUpdated.subscribe(
      users => {
        this.users = users;
        console.log(this.users)
      }
    );
  }
}
