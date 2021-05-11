import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormPage } from './employee-form/employee-form.page';
import { EmployeesListPage } from './employees-list/employees-list.page';

const routes: Routes = [
  { path: '', component: EmployeesListPage },
  { path: 'create', component: EmployeeFormPage },
  { path: 'edit/:id', component: EmployeeFormPage },
  { path: 'preview/:id', component: EmployeeFormPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
