import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Designation } from './employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public myhttp:HttpClient) { }
  designationURL:string='https://booksapp20231107015104.azurewebsites.net/api/Designations';
  listdesignation:Designation[]=[];
  getDesigantion(): Observable<Designation[]>{
    return this.myhttp.get<Designation[]>(this.designationURL);
  }


}
