import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/usersInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://jsonplaceholder.typicode.com/users/'

  constructor(private http:HttpClient) { }

  getUsers() {
    return this.http.get<Users[]>(this.url)
  }

  getSingleUser(id:string) {
    return this.http.get(this.url + id)
  }
  addUsers(data:Users) {
    return this.http.post(this.url, data)
  }
}
