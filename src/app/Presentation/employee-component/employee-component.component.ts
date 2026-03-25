import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../Models/Employee';
import { EmployeeApiServiceComponent } from '../../Infrastructure/employee-api-service/employeeapiservice';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeserviceComponent } from '../../Services/employeeservice/employeeservice.component';
@Component({
  standalone: true ,
  selector: 'app-employee-component',
  imports: [CommonModule ,FormsModule,HttpClientModule],
  templateUrl: './employee-component.component.html',
  styleUrl: './employee-component.component.css'
})
export class EmployeeComponentComponent {
  
  employee: Employee | null = null;
  Employeename: string ='';
  EmployeeEmail: string ='';
  EmployeePassword: string ='';
  selectedRoleId: number | null = null;
  id : number | null = null;
  
  private service = inject(EmployeeApiServiceComponent);
  onsave() 
  {
    if (this.selectedRoleId === null) {
      alert('Please select a role.');
      return;
    }
    const selectedRoleIdNum = Number(this.selectedRoleId);
    const selectedRole = this.dataList.find(r => r.id === selectedRoleIdNum)!;
    console.log('Employee JSON:', selectedRole);
    this.employee = {
      id: 0,
      employeename: this.Employeename,
      employeeEmail: this.EmployeeEmail,
      employeePassword: this.EmployeePassword,
      
      roles: [{
        
        id: 0,
        roleName: selectedRole.name,
        employeeId: 0
      }]
    };
    
    console.log('Employee JSON:', JSON.stringify(this.employee, null, 2));

    const payload = {
      name: this.employee?.employeename ?? '',
      email: this.employee?.employeeEmail ?? '',
      password: this.employee?.employeePassword ?? '',
      roleNames: this.employee?.roles.map(role => role.roleName) ?? []
    };

    // const payload = {
    //   id: 0,  // or your actual id if editing an existing employee
    //   employeename: this.employee?.employeename ?? '',
    //   employeeEmail: this.employee?.employeeEmail ?? '',
    //   employeePassword: this.employee?.employeePassword ?? '',
    //   roles: (this.employee?.roles ?? []).map(role => ({
    //     id: role.id ?? 0,
    //     roleName: role.roleName ?? '',
    //     employeeId: 0  // or the actual employeeId if available
    //   }))
    // };



    console.log(payload);
    this.service.createEmployeeWithRoles(payload).subscribe({
      next: (response) => {
        console.log('Employee created:', response);
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
    
  }
  
  selectedCode: string = '';
 
 
 
  dataList = [
    { id: 1, name: 'Software Developer' },
    { id: 2, name: 'Devops Engineer' },
    { id: 3, name: 'Data Analyst' },
    { id: 4, name: 'DBA' },
    { id: 5, name: 'Tester' },
    { id: 6, name: 'QA' }
  ];
}
