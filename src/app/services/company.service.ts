import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../models/Coupon';
import { Credentials } from '../models/Credentials';
import { Company } from '../models/Company';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
 

  private basicUrl = "http://localhost:8080/company";

  constructor(private httpClient:HttpClient) { }

  public getAllCoupons():Observable<Coupon[]>{
    return this.httpClient.get<Coupon[]>(this.basicUrl+"/getCompanyCoupons/"+Credentials.getInstance().email);
  }

  
  public getCompanyDetails(): Observable<Company> {
    return this.httpClient.get<Company>(this.basicUrl + "/getCompanyDetails/" +
      Credentials.getInstance().email);
  }

  public getCompanyCouponsByMaxPrice(price: number): Observable<any> {
    return this.httpClient.get<any>(this.basicUrl + "/getCompanyCouponsLessThanPrice/" +
      Credentials.getInstance().email + "/" + price);
  }

  public getCompanyCouponsByCategory(category: Category): Observable<any> {
    return this.httpClient.get<any>(this.basicUrl + "/getCompanyCouponsByCategory/" +
      Credentials.getInstance().email + "/" + category);
  }

  public addCoupon(coupon:Coupon): Observable<any> {
    return this.httpClient.post<any>(this.basicUrl + "/addCoupon/" +
      Credentials.getInstance().email , coupon);
  }

  public deleteCoupon(coupon:Coupon): Observable<any> {
    return this.httpClient.delete<any>(this.basicUrl + "/deleteCoupon/" +
      Credentials.getInstance().email+"?couponId="+coupon.id); 
  }

  public updateCoupon(coupon:Coupon): Observable<any> {
    return this.httpClient.post<any>(this.basicUrl + "/updateCoupon/" +
      Credentials.getInstance().email , coupon);
  }

    public getCouponById(id:number): Observable<any> {
      return this.httpClient.get<any>(this.basicUrl + "/getCouponById/?id=" +id);
    }

    
}
