import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Coupon } from 'src/app/models/Coupon';

@Component({
  selector: 'app-get-customer-coupons',
  templateUrl: './get-customer-coupons.component.html',
  styleUrls: ['./get-customer-coupons.component.css']
})
export class GetCustomerCouponsComponent implements OnInit {
  coupons :Coupon[] =  [];

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomerCoupons().subscribe(c=>{this.coupons = c;console.log(c);},
    err=>{alert(err.getMessage);});
  }



}
