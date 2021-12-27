import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/usersInterface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:Users[] = []

  constructor(private userService:UsersService) { }

  getUsers() {
    this.userService.getUsers().subscribe({
      next:(res:any) => {
        console.log(res)
        this.users = res
      },
      error: (HttpError:any) => {
        console.log(HttpError)
      }
    })
  }

  ///Add user
  addUsers(user:any) {
    this.userService.addUsers(user).subscribe({
      next:() => {
        console.log(user)
        this.users.splice(0,0,user)
      }
    })
  }

  deleteUsers(user:any, i:number) {
    this.userService.deleteUsers(user).subscribe({
      next:() => {
        this.users.splice(i, 1)
      }
    })

  }

  ngOnInit(): void {
      this.getUsers()
  }

}
