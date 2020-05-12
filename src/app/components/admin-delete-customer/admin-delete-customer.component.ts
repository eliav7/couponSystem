import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-delete-customer',
  templateUrl: './admin-delete-customer.component.html',
  styleUrls: ['./admin-delete-customer.component.css']
})
export class AdminDeleteCustomerComponent implements OnInit {

  customers: Customer[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllCustomers().subscribe(data => { this.customers = data;},
      err => { console.log(err.error); });
  }

  public deleteCustomer(customer: Customer): void {
    this.adminService.deleteCustomer(customer).subscribe(data => { console.log("success"); console.log("Customer Was Deleted"); }
      , err => { console.log("error"); console.log(err.error); });
  }

}
