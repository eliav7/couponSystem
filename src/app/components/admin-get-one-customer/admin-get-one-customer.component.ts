import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-get-one-customer',
  templateUrl: './admin-get-one-customer.component.html',
  styleUrls: ['./admin-get-one-customer.component.css']
})
export class AdminGetOneCustomerComponent implements OnInit {

  public customer1=new Customer();

  constructor(private adminService:AdminService) { }

  ngOnInit() {
  }

  public getOneCustomer():void {
    this.adminService.getOneCustomer(this.customer1.id).subscribe(data=>{this.customer1=data;
      console.log("customer details were brought");}
      , err=>{console.log(err.error);});
  }


}
