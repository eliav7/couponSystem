import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Coupon } from 'src/app/models/Coupon';
import { Credentials } from 'src/app/models/Credentials';

@Component({
  selector: 'app-company-add-coupon',
  templateUrl: './company-add-coupon.component.html',
  styleUrls: ['./company-add-coupon.component.css']
})
export class CompanyAddCouponComponent implements OnInit {

  public coupon = new Coupon();

  constructor(private companyService:CompanyService) { } 

  ngOnInit() {
    this.companyService.getCompanyDetails().subscribe(data=>{this.coupon.companyId=data.id}
      ,err=>{console.log(err.error);});
  }

  public addCoupon():void{
    //console.log(this.coupon);
    this.companyService.addCoupon(this.coupon).subscribe(c=>{console.log("coupon Was Added");
  console.log("ahhhhhh");},
    err=>{console.log(err.error);
      console.log("ahhhhhh2");});
  }

}
