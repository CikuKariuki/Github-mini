import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()

export class UserService {

  private username:string;
  private clientid="42ce542e404324d6bdc5";
  private clientsecret="c21fdf3d1c981dc02f6a8dda9d3fc875a4b5dd5d";

  constructor(private http: HttpClient) {
    console.log("service is running")
    this.username='CikuKariuki';
   }
   getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid +"&client_secret=" + this.clientsecret)
    map((res: Response) => res.json())
}
}

