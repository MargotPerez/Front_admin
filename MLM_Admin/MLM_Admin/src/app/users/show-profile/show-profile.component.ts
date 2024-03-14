import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { LoginService } from 'src/app/login/services/login.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent  {

user!:User;
userId:number = 0;
// userSubscription? : Subscription

constructor(private userService : UserService, private loginService : LoginService, private router : Router){}

editUser(f : NgForm){
  this.user!.firstName = f.value.firstName;
  this.user!.lastName = f.value.lastName;
  this.user!.mail = f.value.mail;
  this.user!.password = f.value.password;
  this.user!.dateOfBirth = f.value.dateOfBirth;
  this.user!.phoneNumber = f.value.phoneNumber;
  this.user!.invoiceAdress = f.value.invoiceAdress;
  this.user!.deliveryAddress = f.value.deliveryAddress;
  this.user!.isAdmin = true
 
  this.userService.editUser(this.user!);
  console.log(JSON.stringify({user : this.user}))
  this.router.navigate(['/']);
}

logout(): void{
  this.loginService.logout();
}

ngOnInit(): void {
   this.userId=Number(localStorage.getItem('userId'));
   console.log(this.userId)
   

   this.userService.getAdminById(this.userId).subscribe((user : User) =>{this.user = user; console.log(this.user)});
   
}

}
