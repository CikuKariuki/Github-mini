import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Repos } from '../repos';
import {HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[ UserService]
})
export class UserComponent implements OnInit {
 
 user$:Object;
 
  user:any;
 repos:any;
 username:string;
  constructor(private userService: UserService) {
    this.userService.getUserInfo().subscribe(user =>{
      console.log(user);
      this.user=user;
        });
    this.userService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    })
  }

findProfile(){
  this.userService.updateUser(this.username);
  this.userService.getUserInfo().subscribe(user =>{
    console.log(user);
    this.user=user;
      });
  this.userService.getUserRepos().subscribe(repos => {
    console.log(repos);
    this.repos=repos;
  })
  
     
    }
    ngOnInit() {
  
  }

}
