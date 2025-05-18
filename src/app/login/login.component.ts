import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
login="Login works";

constructor(private router:Router){}
goToProfile(){
this.router.navigate(['profile'],{queryParams:{name:'Raghunath Rana'}});
}


}
