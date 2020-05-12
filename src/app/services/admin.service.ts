import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/Company';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  basicUrl = "http://localhost:8080/admin";

  constructor(private httpClient:HttpClient) { }

  public addCompany(company:Company):Observable<any>{
    return this.httpClient.post<any>(this.basicUrl+"/addCompany",company);
  }

  public getAllCompanies():Observable<Company[]>{
    return this.httpClient.get<Company[]>(this.basicUrl+"/getAllCompanies");
  }
  
  public addCustomer(customer:Customer):Observable<any>{
    return this.httpClient.post<any>(this.basicUrl+"/addCustomer",customer);
  }
  
  public getAllCustomers():Observable<any[]>{
    return this.httpClient.get<any[]>(this.basicUrl+"/getAllCustomers");
  }

  public getOneCustomer(id:number):Observable<any>{
    return this.httpClient.get<any>(this.basicUrl+"/getOneCustomer?cuid="+id);
  }

  public getOneCompany(id:number):Observable<any>{
    return this.httpClient.get<any>(this.basicUrl+"/getOneCompany?cid="+id);
  }
 
  public deleteCompany(company:Company):Observable<any>{ 
    return this.httpClient.delete<any>(this.basicUrl+"/deleteCompany/"+company.id);
  }
  
  public deleteCustomer(customer:Customer):Observable<any>{
    return this.httpClient.delete<any>(this.basicUrl+"/deleteCustomer/"+customer.id);
  }

  public updateCompany(company:Company): Observable<any> {
    return this.httpClient.post<any>(this.basicUrl + "/updateCompany", company);
  }

  public updateCustomer(customer:Customer): Observable<any> {
    return this.httpClient.post<any>(this.basicUrl + "/updateCustomer", customer);
  } 
}