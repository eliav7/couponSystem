import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-delete-coupon',
  templateUrl: './company-delete-coupon.component.html',
  styleUrls: ['./company-delete-coupon.component.css']
})
export class CompanyDeleteCouponComponent implements OnInit {

  public coupons : Coupon[];
  
  constructor(private companyService:CompanyService) { }

  ngOnInit() {
    this.companyService.getAllCoupons().subscribe(data=>{this.coupons=data;},
      err=>{console.log(err.message);});
  }

  public deleteCoupon(coupon:Coupon):void{  
    this.companyService.deleteCoupon(coupon).subscribe(data=>
      {console.log("success");console.log(data);console.log("Coupon Was Deleted");}
      ,err=>{console.log("error");console.log(err.error);});
  }

}
