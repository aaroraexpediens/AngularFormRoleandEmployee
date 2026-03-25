import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponentComponent } from './Presentation/employee-component/employee-component.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,         // <-- must add this if you use `imports` here
  imports: [RouterOutlet,EmployeeComponentComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'ANGULARFORMROLEANDEMPLOYEE';
}
