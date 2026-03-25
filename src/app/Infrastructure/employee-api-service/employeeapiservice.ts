import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Employee } from '../../Models/Employee';
import { Observable } from 'rxjs';
import { Injectable ,inject} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
// @Component({
//   selector: 'app-employee-api-service',
//   imports: [],
//   templateUrl: './employee-api-service.component.html',
//   styleUrl: './employee-api-service.component.css'
// })

export class EmployeeApiServiceComponent 
{
  private baseUrl = 'http://localhost:5211/api/Employee';

  private http = inject(HttpClient);

  createEmployeeWithRoles(payload: {
    name: string;
    email: string;
    password: string;
    roleNames: string[];
  }): Observable<Employee> 
  {
    const backendPayload = {
      id: 0, // or whatever id you want to assign
      employeename: payload.name,
      employeeEmail: payload.email,
      employeePassword: payload.password,
      roles: payload.roleNames.map(roleName => ({
        id: 0,
        roleName: roleName,
        employeeId: 0
      }))
    };


    return this.http.post<Employee>(`${this.baseUrl}/create`, backendPayload);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }

  getEmployeeById(id: number): Observable<Employee | null> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number, updatedEmployee: Employee): Observable<Employee | null> {
    return this.http.put<Employee>(`${this.baseUrl}/${id}`, updatedEmployee);
  }

  deleteById(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}`);
  }
}
