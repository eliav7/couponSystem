import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/Credentials';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials = Credentials.getInstance();
  public isLoggedIn: boolean;


  constructor(private loginService: LoginService, private router: Router) {

  }

  public getEmail(): string {
    return this.credentials.email; 
  }

  ngOnInit() {
    // this.credentials.email="KelyRob@Gmail.Com";
    // this.credentials.email="Myin@Gmail.Com";
  }

  public login(): void {
    this.loginService.loginCommand(this.credentials).subscribe(a => {
      if (a) {
        if (this.credentials.type === "admin")
          this.router.navigate(['admin']); 
        if (this.credentials.type === "company")
          this.router.navigate(['company']);
        if (this.credentials.type === "customer")
          this.router.navigate(['customer']);
      }
    },
      err => { console.log(err.getMessage); });
  }



  // public login():void{
  //   this.loginService.loginCommand(this.credentials).subscribe(a=>{this.router.navigate(['admin']);},
  //   err=>{console.log(err.message);})
  // }



  //public login():void{
  // alert(this.credentials.name +this.credentials.password + this.credentials.type);
  // this.loginService.loginCommand(this.credentials).subscribe((loginResult)=>
  // {
  //   this.loginService.isLoggedIn =loginResult.isLoggedIn;
  //   this.loginService.type = loginResult.type;
  //   this.isLoggedIn = loginResult.isLoggedIn;

  //   console.log(loginResult.isLoggedIn);
  //   console.log(loginResult.type);},(err)=>
  //   {console.log(err.message)});

  // if (this.loginService.type=="admin")
  // this.router.navigate(['admin']);
  //}


  // public pi():void{
  //   this.router.navigate(['home']);

  // }

}
