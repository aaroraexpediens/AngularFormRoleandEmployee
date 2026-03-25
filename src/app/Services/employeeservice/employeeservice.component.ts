import { Component, Injectable } from '@angular/core';
import { Employee } from '../../Models/Employee';
import { EmployeeApiServiceComponent } from '../../Infrastructure/employee-api-service/employeeapiservice';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-employeeservice',
  imports: [],
  templateUrl: './employeeservice.component.html',
  styleUrl: './employeeservice.component.css'
})
@Injectable({
  providedIn: 'root',
})
export class EmployeeserviceComponent
{
  constructor(private employeeApi: EmployeeApiServiceComponent) {}
  createEmployeeWithRoles(name: string, email: string, password: string, roleNames: string[]): Observable<Employee> {
    const requestBody = { name, email, password, roleNames };
    return this.employeeApi.createEmployeeWithRoles(requestBody);
  }

  getEmployees(): Observable<Employee[]> {
    return this.employeeApi.getEmployees();
  }

  getEmployeeById(id: number): Observable<Employee | null> {
    return this.employeeApi.getEmployeeById(id);
  }

  updateEmployee(id: number, updatedEmployee: Employee): Observable<Employee | null> {
    return this.employeeApi.updateEmployee(id, updatedEmployee);
  }

  deleteById(id: number): Observable<boolean> {
    return this.employeeApi.deleteById(id);
  }

  deleteAll(): Observable<boolean> {
    return this.employeeApi.deleteAll();
  }
}
