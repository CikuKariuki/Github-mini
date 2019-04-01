import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username:string;
  private clientid="42ce542e404324d6bdc5";
  private clientsecret="c21fdf3d1c981dc02f6a8dda9d3fc875a4b5dd5d";

  constructor(private http: HttpClient) {
    console.log("service is running")
    this.username='CikuKariuki';
   }
   getProfileInfo(){
    return this.http.get("https://api.github.com/users/CikuKariuki?access_token=0574ede6befc69cc9e860ab98c6c884a0460bfe7" + this.username)

}
}

