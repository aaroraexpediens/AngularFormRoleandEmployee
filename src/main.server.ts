import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { EmployeeComponentComponent } from './app/Presentation/employee-component/employee-component.component';

const bootstrap = () => bootstrapApplication(EmployeeComponentComponent, config);

export default bootstrap;
