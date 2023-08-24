import { Component } from '@angular/core';
import { Userlogin } from '../userlogin';
import { UserdataService } from '../userdata.service';


@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrls: ['./logincomp.component.scss']
})
export class LogincompComponent {
  userlog: Userlogin = new Userlogin('', '');
  message: any;
  constructor(private userd: UserdataService) { }

  loginForm() {
    // Call the login method from your service
    // Call the login method from your service
    this.userd['loginForm'](this.userlog.email,this.userlog.email ).subscribe(
      (      response: { message: any; }) => {
        this.message = response.message;
        // Clear form or perform other actions
      },
      (      error: any) => {
        console.error(error); // Handle error
        this.message = 'Login failed';
      }
    );
}
  
}