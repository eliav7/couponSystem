import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { AdminService } from 'src/app/services/admin.service';
import { CompanyName } from 'src/app/models/CompanyName';
import { CustomerService } from 'src/app/services/customer.service';
import { Coupon } from 'src/app/models/Coupon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-purchase-coupon',
  templateUrl: './customer-purchase-coupon.component.html',
  styleUrls: ['./customer-purchase-coupon.component.css']
})
export class CustomerPurchaseCouponComponent implements OnInit {

  public cName: string;
  companies: Company[];
  public companyName = CompanyName.getInstance();
  public coupons: Coupon[]; 
  public flag=true;
  public flag2=false;

  constructor(private adminService: AdminService, private customerService: CustomerService) { }

  ngOnInit() {
    this.adminService.getAllCompanies().subscribe(data => { this.companies = data; },
      err => { console.log(err.message); });
  }

  public showCoupons(name: string) {
    this.customerService.getCompanyCouponsByName(name).subscribe(data => { this.coupons = data;
      if (data.length==0) {
        this.flag=true;
        this.flag2=true;
      }else{
        this.flag=false;
      }},
      err => { console.log(err.message); });
  }

  public purchaseCoupon(coupon:Coupon):void{  
    this.customerService.purchaseCoupon(coupon).subscribe(data=>
      {console.log("success");console.log(data);console.log("Coupon Was Purchased");}
      ,err=>{console.log("error");console.log(err.error);});
  }
 
}


