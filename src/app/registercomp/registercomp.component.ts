import { Component } from '@angular/core';
import { Userinfo } from '../userinfo';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-registercomp',
  templateUrl: './registercomp.component.html',
  styleUrls: ['./registercomp.component.scss']
})
export class RegistercompComponent {
social:string[]=["Facebook","Twitter","Google"];

user:Userinfo=new Userinfo("","","","","");

constructor(private userd: UserdataService) { }

submitForm() {
  this.userd.registerUser(this.user).subscribe(
  
    response => {
      console.log(response.message); 
      
    },    error => {
      console.error(error); 
    }
  );
}
}
