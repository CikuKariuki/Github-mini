import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username:string;
  private clientid="";
  private clientsecret="";

  constructor(private http: HttpClient) {
    console.log("service is running")
    this.username='CikuKariuki';
   }
   getProfileInfo(){
    return this.http.get("https://api.github.com/users/CikuKariuki?access_token=0574ede6befc69cc9e860ab98c6c884a0460bfe7" + this.username)

}
}

