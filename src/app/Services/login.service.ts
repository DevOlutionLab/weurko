import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url="http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }
  login(credentials: User): Observable<string> {
    return this.http.post<{ token: string }>(`${this.url}/login_check`, credentials).pipe(
      map(response => response.token)
    );
  }
}
