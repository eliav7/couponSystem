import { Component, OnInit, Input } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { CustomerService } from 'src/app/services/customer.service';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/Company';

@Component({
  selector: 'app-customer-choose-coupon',
  templateUrl: './customer-choose-coupon.component.html',
  styleUrls: ['./customer-choose-coupon.component.css']
})
export class CustomerChooseCouponComponent implements OnInit {

  public coupons: Coupon[];
  @Input()
  public name: String;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    console.log(this.name);
    this.customerService.getCompanyCouponsByName(this.name).subscribe(data => { this.coupons = data; },
      err => { console.log(err.message); });
  }

  public getCompanyCouponsByName():void { 
    this.customerService.getCompanyCouponsByName(this.name).subscribe(data => { this.coupons = data; },
      err => { console.log(err.message); });

  }
}