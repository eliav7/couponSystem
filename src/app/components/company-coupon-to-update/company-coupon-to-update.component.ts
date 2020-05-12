import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-coupon-to-update',
  templateUrl: './company-coupon-to-update.component.html',
  styleUrls: ['./company-coupon-to-update.component.css']
})
export class CompanyCouponToUpdateComponent implements OnInit {
  public id:number;
  c:Coupon;
  newC= new Coupon(); 

  constructor(private activatedRoute: ActivatedRoute, private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanyDetails().subscribe(data=>{this.newC.companyId=data.id}
      ,err=>{console.log(err.error);});

    this.newC.id = this.activatedRoute.snapshot.params.id; 
    console.log(this.newC.id);
    this.companyService.getCouponById(this.newC.id).subscribe(data=>{this.c=data;},
      err=>{console.log(err.error);});
  } 

  public updateCoupon():void{
    console.log(this.newC);
    this.companyService.updateCoupon(this.newC).subscribe(data=>{console.log("coupon was updated");},
    err=>{console.log(err);})
  }

}
