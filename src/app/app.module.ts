  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HttpClientModule } from "@angular/common/http";
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminAddCustomerComponent } from './components/admin-add-customer/admin-add-customer.component';
import { AdminCompanyToUpdateComponent } from './components/admin-company-to-update/admin-company-to-update.component';
import { AdminCustomerToUpdateComponent } from './components/admin-customer-to-update/admin-customer-to-update.component';
import { AdminDeleteCompanyComponent } from './components/admin-delete-company/admin-delete-company.component';
import { AdminDeleteCustomerComponent } from './components/admin-delete-customer/admin-delete-customer.component';
import { AdminGetAllCompaniesComponent } from './components/admin-get-all-companies/admin-get-all-companies.component';
import { AdminGetAllCustomersComponent } from './components/admin-get-all-customers/admin-get-all-customers.component';
import { AdminGetOneCompanyComponent } from './components/admin-get-one-company/admin-get-one-company.component';
import { AdminGetOneCustomerComponent } from './components/admin-get-one-customer/admin-get-one-customer.component';
import { AdminUpdateCompanyComponent } from './components/admin-update-company/admin-update-company.component';
import { AdminUpdateCustomerComponent } from './components/admin-update-customer/admin-update-customer.component';
import { CompanyAddCouponComponent } from './components/company-add-coupon/company-add-coupon.component';
import { CompanyCouponToUpdateComponent } from './components/company-coupon-to-update/company-coupon-to-update.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyDeleteCouponComponent } from './components/company-delete-coupon/company-delete-coupon.component';
import { CompanyGetCouponsByCategoryComponent } from './components/company-get-coupons-by-category/company-get-coupons-by-category.component';
import { CompanyGetCouponsComponent } from './components/company-get-coupons/company-get-coupons.component';
import { CompanyGetCouponsLessThanPriceComponent } from './components/company-get-coupons-less-than-price/company-get-coupons-less-than-price.component';
import { CompanyGetDetailsComponent } from './components/company-get-details/company-get-details.component';
import { CompanyUpdateCouponComponent } from './components/company-update-coupon/company-update-coupon.component';
import { CustomerChooseCouponComponent } from './components/customer-choose-coupon/customer-choose-coupon.component';
import { CustomerPurchaseCouponComponent } from './components/customer-purchase-coupon/customer-purchase-coupon.component';
import { CustomerComponent } from './components/customer/customer.component';
import { GetCustomerCouponsByCategoryComponent } from './components/get-customer-coupons-by-category/get-customer-coupons-by-category.component';
import { GetCustomerCouponsByMaxPriceComponent } from './components/get-customer-coupons-by-max-price/get-customer-coupons-by-max-price.component';
import { GetCustomerCouponsComponent } from './components/get-customer-coupons/get-customer-coupons.component';
import { GetCustomerDetailsComponent } from './components/get-customer-details/get-customer-details.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LogoutComponent } from './components/logout/logout.component';



@NgModule({
  declarations: [
    AddCompanyComponent,
    AppComponent, 
    AddCompanyComponent,
    AdminComponent,
    AdminAddCustomerComponent,
    AdminCompanyToUpdateComponent,
    AdminCompanyToUpdateComponent,
    AdminCustomerToUpdateComponent,
    AdminDeleteCompanyComponent,
    AdminDeleteCustomerComponent,
    AdminGetAllCompaniesComponent,
    AdminGetAllCustomersComponent,
    AdminGetOneCompanyComponent,
    AdminGetOneCustomerComponent,
    AdminUpdateCompanyComponent,
    AdminUpdateCustomerComponent,
    CompanyAddCouponComponent,
    CompanyComponent,
    CompanyCouponToUpdateComponent,
    CompanyAddCouponComponent,
    CompanyDeleteCouponComponent,
    CompanyGetCouponsByCategoryComponent,
    CompanyGetCouponsComponent,
    CompanyGetCouponsLessThanPriceComponent,
    CompanyGetDetailsComponent,
    CompanyUpdateCouponComponent,
    CustomerChooseCouponComponent,
    CustomerPurchaseCouponComponent,
    CustomerComponent,
    GetCustomerCouponsByCategoryComponent,
    GetCustomerCouponsByMaxPriceComponent,
    GetCustomerCouponsComponent,
    GetCustomerDetailsComponent,
    GetAllCompaniesComponent,
    HomeComponent,
    LayoutComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }