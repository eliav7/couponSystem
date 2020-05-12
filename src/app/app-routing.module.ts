import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminGuardService } from './services/admin-guard.service';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { GetCustomerDetailsComponent } from './components/get-customer-details/get-customer-details.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { CompanyComponent } from './components/company/company.component';
import { GetCustomerCouponsComponent } from './components/get-customer-coupons/get-customer-coupons.component';
import { GetCustomerCouponsByCategoryComponent } from './components/get-customer-coupons-by-category/get-customer-coupons-by-category.component';
import { GetCustomerCouponsByMaxPriceComponent } from './components/get-customer-coupons-by-max-price/get-customer-coupons-by-max-price.component';
import { CustomerPurchaseCouponComponent } from './components/customer-purchase-coupon/customer-purchase-coupon.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { CompanyGetCouponsComponent } from './components/company-get-coupons/company-get-coupons.component';
import { CustomerChooseCouponComponent } from './components/customer-choose-coupon/customer-choose-coupon.component';
import { CompanyAddCouponComponent } from './components/company-add-coupon/company-add-coupon.component';
import { CompanyUpdateCouponComponent } from './components/company-update-coupon/company-update-coupon.component';
import { CompanyGetDetailsComponent } from './components/company-get-details/company-get-details.component';
import { CompanyGetCouponsLessThanPriceComponent } from './components/company-get-coupons-less-than-price/company-get-coupons-less-than-price.component';
import { CompanyDeleteCouponComponent } from './components/company-delete-coupon/company-delete-coupon.component';
import { CompanyGetCouponsByCategoryComponent } from './components/company-get-coupons-by-category/company-get-coupons-by-category.component';
import { CompanyCouponToUpdateComponent } from './components/company-coupon-to-update/company-coupon-to-update.component';
import { AdminDeleteCompanyComponent } from './components/admin-delete-company/admin-delete-company.component';
import { AdminUpdateCompanyComponent } from './components/admin-update-company/admin-update-company.component';
import { AdminGetOneCompanyComponent } from './components/admin-get-one-company/admin-get-one-company.component';
import { AdminAddCustomerComponent } from './components/admin-add-customer/admin-add-customer.component';
import { AdminUpdateCustomerComponent } from './components/admin-update-customer/admin-update-customer.component';
import { AdminDeleteCustomerComponent } from './components/admin-delete-customer/admin-delete-customer.component';
import { AdminGetOneCustomerComponent } from './components/admin-get-one-customer/admin-get-one-customer.component';
import { AdminGetAllCustomersComponent } from './components/admin-get-all-customers/admin-get-all-customers.component';
import { AdminCustomerToUpdateComponent } from './components/admin-customer-to-update/admin-customer-to-update.component';
import { AdminCompanyToUpdateComponent } from './components/admin-company-to-update/admin-company-to-update.component';


const routes: Routes = [
  // { path: "admin", component: AdminComponent, canActivate: [AdminGuardService] },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent, },
  { path: "admin", component: AdminComponent },
  { path: "company", component: CompanyComponent }, 
  { path: "customer", component: CustomerComponent },
  //ADMIN AREA
  { path: "addCompany", component: AddCompanyComponent },
  { path: "getAllCompanies", component: GetAllCompaniesComponent },
  { path: "updateCompany", component: AdminUpdateCompanyComponent },
  { path: "deleteCompany", component: AdminDeleteCompanyComponent },
  { path: "getOneCompany", component: AdminGetOneCompanyComponent },
  { path: "addCustomer", component: AdminAddCustomerComponent },
  { path: "updateCustomer", component: AdminUpdateCustomerComponent },
  { path: "deleteCustomer", component: AdminDeleteCustomerComponent },
  { path: "getAllCustomers", component: AdminGetAllCustomersComponent },
  { path: "getOneCustomer", component: AdminGetOneCustomerComponent },
  { path: "companyToUpdate/:id", component: AdminCompanyToUpdateComponent },
  { path: "customerToUpdate/:id", component: AdminCustomerToUpdateComponent },

  //COMPANY AREA
  { path: "getAllCompanies", component: GetAllCompaniesComponent },
  { path: "companyGetCoupons", component: CompanyGetCouponsComponent },
  { path: "companyAddCoupon", component: CompanyAddCouponComponent },
  { path: "companyUpdateCoupon", component: CompanyUpdateCouponComponent },
  { path: "companyDeleteCoupon", component: CompanyDeleteCouponComponent },
  { path: "companyGetCouponsByCategory", component: CompanyGetCouponsByCategoryComponent },
  { path: "companyGetCouponsLessThanPrice", component: CompanyGetCouponsLessThanPriceComponent },
  { path: "companyGetDetails", component: CompanyGetDetailsComponent },
  { path: "companyCouponToUpdate/:id", component: CompanyCouponToUpdateComponent },
  //{ path: "companyCouponToUpdate", component: CompanyCouponToUpdateComponent },

  //CUSTOMER AREA
  { path: "customerChooseCoupon", component: CustomerChooseCouponComponent },
  { path: "getCustomerCouponsByCategory", component: GetCustomerCouponsByCategoryComponent },
  { path: "getCustomerCouponsByMaxPrice", component: GetCustomerCouponsByMaxPriceComponent },
  { path: "customerPurchaseCoupon", component: CustomerPurchaseCouponComponent },
  { path: "getCustomerDetails", component: GetCustomerDetailsComponent },
  { path: "getCustomerCoupons", component: GetCustomerCouponsComponent },
  { path: "**", component: PageNotFoundComponent, pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//eeeee