import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-admin-get-all-customers',
  templateUrl: './admin-get-all-customers.component.html',
  styleUrls: ['./admin-get-all-customers.component.css']
})
export class AdminGetAllCustomersComponent implements OnInit {
  
  customers: Customer[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllCustomers().subscribe(data => { this.customers = data;},
      err => { console.log(err.error); });
  }

}
