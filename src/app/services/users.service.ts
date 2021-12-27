import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/usersInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://jsonplaceholder.typicode.com/users/'

  constructor(private http:HttpClient) { }


  //get users
  getUsers() {
    return this.http.get<Users[]>(this.url)
  }

  //GET SINGLE USER
  getSingleUser(id:string) {
    return this.http.get(this.url + id)
  }
  //ADD SINGLE USER
  addUsers(data:Users) {
    return this.http.post(this.url, data)
  }

  //delete user
  deleteUsers(id:any) {
    return this.http.delete(this.url + id)
  }
  //EDIT SINGLE USER DATA
  editUser(id:any, body:Users) {
    return this.http.patch(this.url + id, body)
  }
}
