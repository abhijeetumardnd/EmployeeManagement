import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from './EmployeeModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {

  }

  getEmployeeList(): Observable<Employees[]> {
      return this.httpClient
      .get<Employees[]>('assets/data.json');
  }

}
