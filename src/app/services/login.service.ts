import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResult } from '../models/loginResult';
import { Credentials } from '../models/Credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
public isLoggedIn:boolean;
public type:string;

  constructor(private httpClient:HttpClient) { }

  public loginCommand(credentials:Credentials):Observable<LoginResult>{
    return this.httpClient.get<LoginResult>("/assets/json/server-demo.json")
  }

}
