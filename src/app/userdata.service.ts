import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  [x: string]: any;
  constructor(private http:HttpClient){}
  registerUser(user: any): Observable<any> {
    const url = 'http://localhost:3000/register'; 
    return this.http.post(url, user);
  }
  
  
}
