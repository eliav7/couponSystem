import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Coupon } from 'src/app/models/Coupon';

@Component({
  selector: 'app-get-customer-coupons-by-max-price',
  templateUrl: './get-customer-coupons-by-max-price.component.html',
  styleUrls: ['./get-customer-coupons-by-max-price.component.css']
})
export class GetCustomerCouponsByMaxPriceComponent implements OnInit {

  public price:number;
  public coupons : Coupon[] 
  public flag=true;
  public flag2=false;
  
  constructor(private customerService:CustomerService) { }

  ngOnInit() {
  }

  public getCustomerCouponsByMaxPrice():void{
    this.customerService.getCustomerCouponsByMaxPrice(this.price).subscribe(c=>{this.coupons=c;
      ;if (c.length==0) {
        this.flag=true;
        this.flag2=true;
      }else{
        this.flag=false;
      }},
      err=>{console.log(err.message);});
 } 

}
