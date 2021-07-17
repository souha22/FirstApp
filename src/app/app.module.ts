import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './shared/employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './shared/authentication.service';
import { ApiService } from './shared/Api.service';
import { AppRoutingModule } from './app-routing.module';
import { RegistreComponent } from './registre/registre.component';
import { HomeComponent } from './home/home.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { CompanyComponent } from './company/company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    LoginComponent,
    RegistreComponent,
    HomeComponent,
    SingInComponent,
    PageAdminComponent,
    CompanyComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule
  ],
  exports: [
    EmployeeComponent,
    EmployeeListComponent,
    LoginComponent,
    RegistreComponent,
    CompanyListComponent
  ],
  providers: [
    EmployeeService,
    AuthenticationService,
    ApiService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
