import { Component, OnInit } from '@angular/core';
import{EmployeeService} from "../employee.service";
import{Employee} from"../employee";
import {Router}from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

employees : Observable<Employee[]>;

  constructor(private employeeservice :EmployeeService, private router :Router ) {}

  ngOnInit(): void {
    this.reloadDate();
  }

  reloadDate(){
    this.employees=this.employeeservice.getEmployeesList();
  }

  delete(id:number){
    this.employeeservice.deleteEmployees(id)
    .subscribe(
      data=>{
        this.reloadDate();
      },
      error=>console.log(error));
  }
}
