import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { EmployeeComponentComponent } from './app/Presentation/employee-component/employee-component.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

  bootstrapApplication(EmployeeComponentComponent, {
    providers: [
      importProvidersFrom(HttpClientModule),
    ]
  }).catch(err => console.error(err));