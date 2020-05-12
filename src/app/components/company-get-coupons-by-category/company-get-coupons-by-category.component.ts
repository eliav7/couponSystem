import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-get-coupons-by-category',
  templateUrl: './company-get-coupons-by-category.component.html',
  styleUrls: ['./company-get-coupons-by-category.component.css']
})
export class CompanyGetCouponsByCategoryComponent implements OnInit {

  public coupon = new Coupon();
  public coupons :Coupon[];
  public flag=true; 
  public flag2=false;

  constructor(private companyService:CompanyService) { }

  ngOnInit() {
  }

   public getCompanyCouponsByCategory():void{
      this.companyService.getCompanyCouponsByCategory(this.coupon.category).subscribe(c=>{this.coupons=c;
        if (c.length==0) {
          this.flag=true;
          this.flag2=true;
        }else{
          this.flag=false;
        }
      }, err=>{console.log(err.message);});
   }
      
}
