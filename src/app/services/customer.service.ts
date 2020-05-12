import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/Credentials';
import { Coupon } from '../models/Coupon';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private basicUrl = "http://localhost:8080/customer";
  //  public customer : Customer = new Customer(1,"e","e","e","e",null);

  constructor(private httpClient: HttpClient) { }

  // public getIdByMail():Observable<number>{
  //   return this.httpClient.get<number>("http://localhost:8080/customer/getIdByMail/"+Credentials.getInstance().email);
  // }

  public getCustomerDetails(): Observable<Customer> {
    //console.log(Credentials.getInstance().email)
    return this.httpClient.get<Customer>(this.basicUrl + "/getCustomerDetails/" +
      Credentials.getInstance().email);
    //    return this.httpClient.get<Customer>("http://localhost:8080/customer/getCustomerDetails/"+Credentials.getInstance().email, { withCredentials:true });


    // return this.httpClient.get<Customer>("/assets/json/customer.json");

  }

  // public purchaseCoupon(): Observable<Coupon>{
  //   return this.httpClient.get<Coupon>("htttp://localhost:8080/customer/purchaseCoupon/"
  // }

  //, {withCredentials:true}

  public getCustomerCoupons(): Observable<[Coupon]> {
    return this.httpClient.get<[Coupon]>(this.basicUrl + "/getCustomerCoupons/" +
      Credentials.getInstance().email);
  }

  public getCustomerCouponsByCategory(category: Category): Observable<any> {
    return this.httpClient.get<any>(this.basicUrl + "/getCustomerCouponsByCategory/" +
      Credentials.getInstance().email + "/" + category);
  }

  public getCustomerCouponsByMaxPrice(price: number): Observable<any> {
    return this.httpClient.get<any>(this.basicUrl + "/getCustomerCouponsLessThanPrice/" +
      Credentials.getInstance().email + "/" + price);
  }

  public purchaseCoupon(coupon : Coupon):Observable<any>{
    return this.httpClient.post<any>(this.basicUrl+"/purchaseCoupon/"+
    Credentials.getInstance().email, coupon);
  }

  public getCompanyCouponsByName(name:String):Observable<Coupon[]>{
    return this.httpClient.get<Coupon[]>("http://localhost:8080/company"+"/getCompanyCouponsByName/?name="+name);
  }

}


