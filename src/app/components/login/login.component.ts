import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/models/Credentials';
import { LoginService } from 'src/app/services/login.service';
import { LoginResult } from 'src/app/models/loginResult';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials = new Credentials();
  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  public login():void{
    // alert(this.credentials.name +this.credentials.password + this.credentials.type);
    this.loginService.loginCommand(this.credentials).subscribe((loginResult)=>
    {
      this.loginService.isLoggedIn =loginResult.isLoggedIn;
      this.loginService.type = loginResult.type;
      
      console.log(loginResult.isLoggedIn);
      console.log(loginResult.type);},(err)=>
      {console.log(err.message)});
  }
}
