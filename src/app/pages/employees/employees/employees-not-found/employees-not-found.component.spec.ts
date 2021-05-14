import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesNotFoundComponent } from './employees-not-found.component';

describe('EmployeesNotFoundComponent', () => {
  let component: EmployeesNotFoundComponent;
  let fixture: ComponentFixture<EmployeesNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
