import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Credentials } from 'src/app/models/Credentials';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService:AdminService, private router:Router) { }

  ngOnInit() {
  }

  public addCompany():void{

  }

  public logout():void{
    Credentials.getInstance().email=undefined;
    Credentials.getInstance().password=undefined;
    Credentials.getInstance().type=undefined;
    this.router.navigate(['home']);
  }


}
