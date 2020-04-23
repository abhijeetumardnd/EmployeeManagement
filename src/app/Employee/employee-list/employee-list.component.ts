import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employees } from '../EmployeeModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeList$: Observable<Employees[]>;
  query: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeList$ = this.getAllEmployeeLsit();
  }

  getAllEmployeeLsit(): Observable<Employees[]> {
    return this.employeeService.getEmployeeList();
  }
}
