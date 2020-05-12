import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-get-one-company',
  templateUrl: './admin-get-one-company.component.html',
  styleUrls: ['./admin-get-one-company.component.css']
})
export class AdminGetOneCompanyComponent implements OnInit {

  public company1=new Company();
 
  constructor(private adminService:AdminService) { } 

  ngOnInit() { 
  }

  public getOneCompany():void {
    this.adminService.getOneCompany(this.company1.id).subscribe(data=>{this.company1=data;
      console.log("company details were brought");}
      , err=>{console.log(err.error);});
  } 
  // public getOneCustomer():void {
  //   this.adminService.getOneCustomer(this.customer1.id).subscribe(data=>{this.customer1=data;
  //     console.log("customer details were brought");}
  //     , err=>{console.log(err.error);});
  // }

}
