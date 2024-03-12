import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users : User[] = [];

  usersUpdated = new Subject<User[]>();
  baseUrl = "https://localhost:7200/api/Users";

  options = {
    headers: new HttpHeaders(
      { 
        'content-type': 'application/json',
        'authorization' : 'Bearer ' + localStorage.getItem('token') || ''
      }
    )
  };
  
  constructor(private http : HttpClient) { }

  
  getUsers(){
    this.http.get<User[]>(this.baseUrl, this.options).subscribe(
      users => {
        this.users = users;
        this.users = this.users.filter(u=>u.isAdmin===false);
        this.usersUpdated.next([...this.users]);
      }
    );
  }

  getUserById(id : number) : User | undefined {
    return this.users.find(u=>u.id === id)
  }

  editUser(user : User) {
    const id = user.id
    this.http.put<User>(this.baseUrl+"/"+id, user, this.options).subscribe(
      user => {
      this.users = this.users.map(
        u=>u.id === user.id ? user : u
      );
      this.usersUpdated.next([...this.users]);
    }
    );
  }

  deleteUser(id : number){
    this.http.delete<User>(this.baseUrl +"/"+id, this.options).subscribe(
    user => {
    this.users = this.users.filter(u=>u.id !== id);
    this.usersUpdated.next([...this.users]);
    }
    );
  }


}
