import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/interfaces/usersInterface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user:Users = {}



  constructor(private userService: UsersService, private route:ActivatedRoute, private router:Router) { }



  id:string = this.route.snapshot.params['id']

  
  getSingleUser(){
    this.userService.getSingleUser(this.id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.user = res
      }
    })
  }

  updateUser(user:Users){
    this.userService.editUser(this.id,user).subscribe({
      next:()=>{
        console.log(user)
        this.router.navigateByUrl('/users')
      }
    })
  }
  ngOnInit(): void {
    this.getSingleUser()
  }

}
