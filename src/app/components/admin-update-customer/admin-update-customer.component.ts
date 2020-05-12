import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-update-customer',
  templateUrl: './admin-update-customer.component.html',
  styleUrls: ['./admin-update-customer.component.css']
})
export class AdminUpdateCustomerComponent implements OnInit {
  customers: Customer[];

  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit() {
    this.adminService.getAllCustomers().subscribe(data => { this.customers = data; },
      err => { console.log(err.message); });
  }

  public updateCustomer( customer: Customer):void{  
    this.router.navigate(['admin-customer-to-update/'+customer.id])
   }


}
