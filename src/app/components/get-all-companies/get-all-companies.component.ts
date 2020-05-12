import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/Company';

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {

  companies: Company[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllCompanies().subscribe(data => { this.companies = data;},
      err => { console.log(err.message); });
  }




}
