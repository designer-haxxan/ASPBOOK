import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(public empservice: EmployeeService) {}
  ngOnInit(): void {
    this.empservice.getDesigantion().subscribe(res => {

      this.empservice.listdesignation=res;
    });
  }
}
