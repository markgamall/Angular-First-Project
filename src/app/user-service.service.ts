import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Userint } from './int1';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url_: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Userint[]> {
    return this.http.get<Userint[]>(this.url_).pipe(catchError((err)=>{
        return throwError(()=>err.message || "Internal server error")
      }));
    }

}

