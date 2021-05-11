import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeeFormPage } from './employee-form/employee-form.page';
import { EmployeesListPage } from './employees-list/employees-list.page';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
  declarations: [EmployeesListPage, EmployeeFormPage],
  imports: [CommonModule, EmployeesRoutingModule],
})
export class EmployeesModule {}
