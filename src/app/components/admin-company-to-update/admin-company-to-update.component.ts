import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-company-to-update',
  templateUrl: './admin-company-to-update.component.html',
  styleUrls: ['./admin-company-to-update.component.css']
})
export class AdminCompanyToUpdateComponent implements OnInit {

  public id:number;
  c:Company;
  newC= new Company(); 

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit() {
    this.newC.id = this.activatedRoute.snapshot.params.id;
    console.log(this.newC.id);
    this.adminService.getOneCompany(this.newC.id).subscribe(data=>{this.c=data;},
      err=>{console.log(err.error);});
  } 
 
  public updateCompany():void{
    console.log(this.newC);
    this.adminService.updateCompany(this.newC).subscribe(data=>{console.log("company was updated");},
    err=>{console.log(err);}) 
  }
}
