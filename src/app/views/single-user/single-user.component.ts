import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/interfaces/usersInterface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  constructor(private userService:UsersService, private route:ActivatedRoute) { }


  id:string = this.route.snapshot.params['id']
  users:Users = {}

  getSingleUser(){
    console.log(this.id)
    this.userService.getSingleUser(this.id).subscribe({
      next:(res:any) => {
        console.log(res)
        this.users = res
      }
    })
  }



  ngOnInit(): void {
    this.getSingleUser()
  }

}
