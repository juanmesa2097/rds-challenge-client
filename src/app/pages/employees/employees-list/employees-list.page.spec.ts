import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListPage } from './employees-list.page';

describe('EmployeesListPage', () => {
  let component: EmployeesListPage;
  let fixture: ComponentFixture<EmployeesListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesListPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
