import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from 'miragejs';
import { Observable } from 'rxjs';
import { APIService } from '../MockServer/RestAPI/API.service';
import { AuthResponseData } from '../model/AuthResponseData.model';
import { User } from '../model/user.model';
import { postState } from '../post/postlist/state/post.state';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient!:HttpClient;
  constructor(httpClient: HttpClient,private server:APIService) {
    this.httpClient = httpClient;
    this.server.mockServer();
  }
  
  url = '/api/LoginAuth';
  public getASingleUser():Observable<any>  {
    return this.httpClient.get(this.url);
  }
   PostLogin(email:any ,password: string):Observable <AuthResponseData>{
    let  PostJson = JSON.stringify({email: email, password: password})
    return this.httpClient.post<AuthResponseData>(this.url,PostJson)
  }

  FormatUserData(data : AuthResponseData){
    let userData = new User(data.idTocken,data.email,data.authUser)
    return userData;
  }
}
