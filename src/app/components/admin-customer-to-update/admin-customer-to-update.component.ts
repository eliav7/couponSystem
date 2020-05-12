import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-customer-to-update',
  templateUrl: './admin-customer-to-update.component.html',
  styleUrls: ['./admin-customer-to-update.component.css']
})
export class AdminCustomerToUpdateComponent implements OnInit {

  public id:number;
  c:Customer;
  newC= new Customer(); 

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit() {
    this.newC.id = this.activatedRoute.snapshot.params.id;
    console.log(this.newC.id);
    this.adminService.getOneCustomer(this.newC.id).subscribe(data=>{this.c=data;},
      err=>{console.log(err.error);});
  } 
 
  public updateCustomer():void{
    console.log(this.newC);
    this.adminService.updateCustomer(this.newC).subscribe(data=>{console.log("customer was updated");},
    err=>{console.log(err);}) 
  }
}
