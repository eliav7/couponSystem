import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Coupon } from 'src/app/models/Coupon';

@Component({
  selector: 'app-company-get-coupons-less-than-price',
  templateUrl: './company-get-coupons-less-than-price.component.html',
  styleUrls: ['./company-get-coupons-less-than-price.component.css']
})
export class CompanyGetCouponsLessThanPriceComponent implements OnInit {

  public price:number;
  public coupons : Coupon[] 
  public flag=true;
  public flag2=false;

  constructor(private companyService:CompanyService) { }

  ngOnInit() {
  } 

  public getCompanyCouponsByMaxPrice():void{ 
    this.companyService.getCompanyCouponsByMaxPrice(this.price).subscribe(c=>{this.coupons=c;
      ;if (c.length==0) {
        this.flag=true;
        this.flag2=true;
      }else{
        this.flag=false;
      }},
      err=>{console.log(err.message);});
 } 

}
