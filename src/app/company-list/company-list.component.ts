import { Component, OnInit } from '@angular/core';
import { Company } from '../Model/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  CompanyList : Company[];


  constructor() { }

  ngOnInit(): void {

    this.CompanyList = [
      {Id: 1,Nom: 'Sagemcom', Country: 'Tunis',Adress: '34 Paris Avenue' ,Post: 4 ,send: 0, receive: 0},
      {Id: 2,Nom: 'DATABIZ', Country: 'France',Adress: 'Paris' ,Post: 10 ,send: 3,receive: 0},
      {Id: 3,Nom: 'Silkhom', Country: 'France',Adress: 'Lyon' ,Post: 3 ,send: 0, receive: 0}
    ];
  }

  myBlog: string = "Welcome to our Companys";
  
  IncrementSend(company: Company){
    let i= this.CompanyList.indexOf(company);
    this.CompanyList[i].send++;
  }
}
