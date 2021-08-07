import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

  constructor(private http: HttpClient) { }
  private url = 'http://127.0.0.1:8000/api';

  errorHandlerpost(error: HttpErrorResponse){
    return throwError(error);
  }

  updateprofil(data){
    return this.http.post<any>(`${this.url}/update_my_profile`,data,{headers:this.headers}).pipe(
      catchError(this.errorHandlerpost)
      );
  }
  seeprofile():Observable<User>{
    return this.http.get<User>(`${this.url}/my_profile`, {headers:this.headers});
  }
}