import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-update-coupon',
  templateUrl: './company-update-coupon.component.html',
  styleUrls: ['./company-update-coupon.component.css']
})
export class CompanyUpdateCouponComponent implements OnInit {

  public coupons : Coupon[];
  
  constructor(private companyService:CompanyService, private router:Router) { }

  ngOnInit() {
    this.companyService.getAllCoupons().subscribe(data=>{this.coupons=data;},
      err=>{console.log(err.message);});
  }

  public updateCoupon(coupon:Coupon):void{  
   this.router.navigate(['company-coupon-to-update/'+coupon])
  }
}
  
//   public updateCoupon(coupon:Coupon):void{  
//     this.companyService.deleteCoupon(coupon).subscribe(data=>
//       {console.log("success");console.log(data);console.log("Coupon Was Deleted");}
//       ,err=>{console.log("error");console.log(err.error);});
//   }
// }
