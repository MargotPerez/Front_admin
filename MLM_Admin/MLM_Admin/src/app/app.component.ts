import { Component } from '@angular/core';
import { LoginService } from './login/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MLM_Admin';

  constructor(private loginService : LoginService){}
  
  logout(){
    this.loginService.logout();
  }
}
