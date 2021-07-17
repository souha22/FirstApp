import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { RegistreComponent } from "./registre/registre.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeComponent} from "./employee/employee.component";
import {HomeComponent} from "./home/home.component";
import {SingInComponent} from "./sing-in/sing-in.component";
import {PageAdminComponent} from "./page-admin/page-admin.component";
import {CompanyListComponent} from "./company-list/company-list.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistreComponent },
  { path: 'employee_list', component: EmployeeListComponent },
  { path: 'employee', component: EmployeeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sing_in', component: SingInComponent},
  {path: 'Page_admin', component: PageAdminComponent},
  {path: 'Company_list', component: CompanyListComponent},

  // otherwise redirect to home
  { path: '***', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
