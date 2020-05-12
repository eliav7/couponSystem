import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-get-customer-coupons-by-category',
  templateUrl: './get-customer-coupons-by-category.component.html',
  styleUrls: ['./get-customer-coupons-by-category.component.css']
})
export class GetCustomerCouponsByCategoryComponent implements OnInit {

  public coupon = new Coupon();
  public coupons :Coupon[];
  public flag=true;
  public flag2=false;

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
  }

   public getCustomerCouponsByCategory():void{
      this.customerService.getCustomerCouponsByCategory(this.coupon.category).subscribe(c=>{this.coupons=c;
        if (c.length==0) {
          this.flag=true;
          this.flag2=true;
        }else{
          this.flag=false;
        }
      
      }, err=>{console.log(err.message);}); 
   }
      

   
}

