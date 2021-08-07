import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  private url = 'http://127.0.0.1:8000';

  register(user: User) {
    return this.http.post(`${this.url}/register`, user);
  }
}
