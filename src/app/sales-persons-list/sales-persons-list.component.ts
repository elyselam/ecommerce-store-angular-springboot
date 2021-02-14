import { Component, OnInit } from '@angular/core';
import {SalesPersons} from './sales-persons';

@Component({
  selector: 'app-sales-persons-list',
  templateUrl: './sales-persons-list-bootstrap.component.html',
  styleUrls: ['./sales-persons-list.component.css']
})
export class SalesPersonsListComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  salesPersonsList: SalesPersons[] = [
    new SalesPersons("Anup", "Kumar", "anup.kumar@luv2code.com", 50000),
    new SalesPersons("John", "Doe", "john.doe@luv2code.com", 40000),
    new SalesPersons("Claire", "Murphy", "claire.murphy@luv2code.com", 90000),
    new SalesPersons("Mai", "Truong", "mai.truong@luv2code.com", 60000)
  ];
}
