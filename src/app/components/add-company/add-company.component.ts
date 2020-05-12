import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  company= new Company();

  constructor(private adminService:AdminService) { }

  ngOnInit() {
    // headers: [
    //   //{ name: 'Content-Type', value: 'multipart/form-data' },
    //   { name: 'Access-Control-Allow-Origin', value: '*' },
    //   { name: 'Access-Control-Allow-Methods', value: 'POST, OPTIONS, GET'}
    //  //{ name: 'Access-Control-Allow-Credentials', value: 'true'}
    // ]
  }

  public addCompany():void{
    console.log(this.company);
    this.adminService.addCompany(this.company).subscribe(c=>{console.log("Company Was Added");
  console.log("ahhhhhh");},
    err=>{console.log(err.error);
      console.log("ahhhhhh2");});
  }

}
