import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from '../Model/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @Input() company: Company;
  @Output() IncrementEvent = new EventEmitter<Company>();

  constructor() { }

  ngOnInit(): void {
  }

  notif(){
    this.IncrementEvent.emit(this.company);
  }



}
