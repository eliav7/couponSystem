import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/Company';

@Component({
  selector: 'app-admin-delete-company',
  templateUrl: './admin-delete-company.component.html',
  styleUrls: ['./admin-delete-company.component.css']
})
export class AdminDeleteCompanyComponent implements OnInit {

  companies: Company[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllCompanies().subscribe(data => { this.companies = data; },
      err => { console.log(err.message); });
  }

  public deleteCompany(company: Company): void {
    this.adminService.deleteCompany(company).subscribe(data => { console.log("success"); console.log("Company Was Deleted"); }
      , err => { console.log("error"); console.log(err.error); });
  }

}
