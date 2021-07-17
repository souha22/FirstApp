import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee.model';
import {NgxSpinnerService} from 'ngx-spinner';
const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class EmployeeService {
  allEmployee: Employee[];

  currentEmployee: Employee = {
    firstName: '',
    lastName: '',
    address: '',
    contact: null,
    id: null,
    designation: ''
  };
  url = 'http://localhost:3000/employee';
  constructor(public http: HttpClient, public ngxSpinnerService: NgxSpinnerService) {

  }
  addUser(u: Employee){
    return this.http.post(this.url, u);
  }
  getUsers(){
    return this.http.get<Employee[]>(this.url);
  }
  getAllEmployee() {
    this.ngxSpinnerService.show();
    return this.http.get<Employee[]>(this.url, headerOption).subscribe(
      (data: Employee[]) => {
        this.allEmployee = data;
        console.table(this.allEmployee);
        setTimeout(() => {
          this.ngxSpinnerService.hide();
        }, 500);
      });
  }


  // tslint:disable-next-line:ban-types
  deleteEmployee(id: Number): Observable<Employee> {
    return this.http.delete<Employee>(this.url + '/' + id, headerOption);

  }
  updateEmployee(employee: Employee): Observable<Employee>
  {
    // @ts-ignore
    return this.http.put<Employee>(this.url + '/' + employee.id, employee, headerOption);
  }
}
