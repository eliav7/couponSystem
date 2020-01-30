import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private loginService:LoginService, private router:Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
     if(this.loginService.type==="admin" && this.loginService.isLoggedIn) {
      return true;
    }
    this.router.navigate(["/login"])
    return false;

  }



}
