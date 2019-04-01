import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Repos } from '../repos';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 user:any;
 repos:any[];
  constructor(private userService: UserService) {
    this.userService.getUserInfo().subscribe(user => {
      console.log(user);
    });
   }

  ngOnInit() {
    // this.http.get("https://api.github.com/users/CikuKariuki/repos").subscribe(user=>{
      
    // })
  }

}
