import { Component } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  user? : User ;

  constructor(
    private userService : UserService, 
    private router : Router,
    private activatedRoute : ActivatedRoute
  ){}
  
  editUser(f : NgForm){
    this.user!.firstName = f.value.firstName;
    this.user!.lastName = f.value.lastName;
    this.user!.mail = f.value.mail;
    this.user!.password = f.value.password;
    this.user!.dateOfBirth = f.value.dateOfBirth;
    this.user!.phoneNumber = f.value.phoneNumber;
    this.user!.invoiceAdress = f.value.invoiceAddress;
    this.user!.deliveryAddress = f.value.deliveryAddress;
    this.userService.editUser(this.user!);
    this.router.navigate(['/users']);
  }



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      parametres => {
        const id = parametres['id'];
        this.user = this.userService.getUserById(+id)
      });
  }
}
