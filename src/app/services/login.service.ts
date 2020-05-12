import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResult } from '../models/loginResult';
import { Credentials } from '../models/Credentials';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
public isLoggedIn:boolean;
public type:string;

  constructor(private httpClient:HttpClient, private router:Router) { }

   public loginCommand(credentials:Credentials):Observable<boolean> {
  
    if (credentials.type==="admin"){
    return this.httpClient.get<boolean>("http://localhost:8080/admin/login?email="
        +credentials.email+"&password="+credentials.password);
    }
    
    if (credentials.type==="company") {
      return this.httpClient.get<boolean>("http://localhost:8080/company/login/"+credentials.email
      +"/"+credentials.password);
    }

    
    if (credentials.type==="customer") {
      return this.httpClient.get<boolean>("http://localhost:8080/customer/login/"+credentials.email
      +"/"+credentials.password);
    }
    
    
    
    //http://localhost:8080/admin/login?email=eliav7@hotmail.com&password=1234
    // if (credentials.type==="admin"
      //    && this.httpClient.get<boolean>("/http://localhost:8080/admin/login?email="
      //    +credentials.email+"&password="+credentials.password)){
      //      this.router.navigate(['/admin'])
      // }
  }

  // public loginCommand(credentials:Credentials):Observable<LoginResult>{
  //   return this.httpClient.get<LoginResult>("/assets/json/server-demo.json")
  // }

}
