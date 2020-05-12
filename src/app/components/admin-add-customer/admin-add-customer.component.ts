import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-add-customer',
  templateUrl: './admin-add-customer.component.html',
  styleUrls: ['./admin-add-customer.component.css']
})
export class AdminAddCustomerComponent implements OnInit {

  public customer = new Customer();

  constructor(private adminService:AdminService) { }

  ngOnInit() {
  }

  public addCustomer():void{
    this.adminService.addCustomer(this.customer).subscribe(data=>{console.log("customer was added")},
    err=>{console.log(err.error);});
  }

}
