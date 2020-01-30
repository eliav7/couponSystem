import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminGuardService } from './services/admin-guard.service';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [
  {path:"admin", component:AdminComponent, canActivate:[AdminGuardService]},
  {path:"login", component:LoginComponent,},
  {path:"home", component:HomeComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
   {path:"**", component:PageNotFoundComponent, pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//eeeee