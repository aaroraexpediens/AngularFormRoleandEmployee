import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeApiServiceComponent } from './employeeapiservice';

describe('EmployeeApiServiceComponent', () => {
  let component: EmployeeApiServiceComponent;
  let fixture: ComponentFixture<EmployeeApiServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeApiServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeApiServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
