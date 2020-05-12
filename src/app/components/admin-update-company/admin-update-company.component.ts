import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-update-company',
  templateUrl: './admin-update-company.component.html',
  styleUrls: ['./admin-update-company.component.css']
})
export class AdminUpdateCompanyComponent implements OnInit {
 
  companies: Company[];

  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit() {
    this.adminService.getAllCompanies().subscribe(data => { this.companies = data; },
      err => { console.log(err.message); });
  }

  public updateCompany(company: Company):void{  
    this.router.navigate(['admin-company-to-update/'+company.id])
   }

}
