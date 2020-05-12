import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Coupon } from 'src/app/models/Coupon';

@Component({
  selector: 'app-company-get-coupons',
  templateUrl: './company-get-coupons.component.html',
  styleUrls: ['./company-get-coupons.component.css']
})
export class CompanyGetCouponsComponent implements OnInit {

  public coupons : Coupon[];
  
  constructor(private companyService:CompanyService) { }

  ngOnInit() {
    this.companyService.getAllCoupons().subscribe(data=>{this.coupons=data;},
      err=>{console.log(err.message);});
  }

}
