import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/Customer';
import { Credentials } from 'src/app/models/Credentials';

@Component({
  selector: 'app-get-customer-details',
  templateUrl: './get-customer-details.component.html',
  styleUrls: ['./get-customer-details.component.css']
})
export class GetCustomerDetailsComponent implements OnInit {

  customer1: Customer;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    console.log(Credentials.getInstance());
    console.log(Credentials.getInstance().email);

    // this.customerService.getIdByMail().subscribe(a=>{this.customer1.id=a;console.log(a);},
    // err=>{console.log(err.message);});

    this.customerService.getCustomerDetails().subscribe(customer => { this.customer1 = customer; }
      , err => { alert(err.message); });
  }

  //Credentials.getInstance().email



}
