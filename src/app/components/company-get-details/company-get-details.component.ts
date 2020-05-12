import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/Company';

@Component({
  selector: 'app-company-get-details',
  templateUrl: './company-get-details.component.html',
  styleUrls: ['./company-get-details.component.css']
})
export class CompanyGetDetailsComponent implements OnInit {

  public company1:Company;

  constructor(private companyService:CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanyDetails().subscribe(company => { this.company1 = company; }
      , err => { alert(err.message); });
  }

}
