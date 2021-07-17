import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }
  addUser(u: User){
    return this.http.post(this.url, u);
  }
  getUsers(){
    return this.http.get<User[]>(this.url);
  }
  getUserById(id: string){
    return this.http.get<User>(this.url + '/' + id);
  }
  deleteUser(id: string)
  {
    return this.http.delete(this.url + '/' + id);
  }
  updateUser(id: string, value: any): Observable<User>
  {
    // @ts-ignore
    return this.http.put(this.url + '/' + id, value);
  }
}
