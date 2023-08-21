import { Component, OnInit } from '@angular/core';
import { Userint } from '../int1';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit{
objuser:Userint[]=[];
constructor(private userservice:UserServiceService){}

ngOnInit(): void {
  this.userservice.getUsers().subscribe(
    (data: Userint[]) => {
      this.objuser = data;
    });
}

}
