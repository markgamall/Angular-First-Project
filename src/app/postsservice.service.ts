import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Postint } from './int2';

@Injectable({
  providedIn: 'root'
})
export class PostsserviceService {

  urll_: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Postint[]> {
    return this.http.get<Postint[]>(this.urll_).pipe(catchError((err)=>{
      return throwError(()=>err.message || "Internal server error")
    }));
  }

}
