import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { Repos } from '../repos';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 user:any;
 repos:any[];
  constructor(private http:HttpClient, private userService: UserService) {
    this.userService.getProfileInfo().subscribe(user => {
      this.user = user
    });
   }

  ngOnInit() {
    this.http.get("https://api.github.com/users/CikuKariuki/repos").subscribe(data=>{
      
    })
  }

}
