import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeEditPage } from './employee-edit.page';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@NgModule({
  declarations: [EmployeeEditPage, EmployeeFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'create', component: EmployeeEditPage },
      { path: 'edit', component: EmployeeEditPage },
      { path: 'preview', component: EmployeeEditPage },
    ]),
  ],
})
export class EmployeeEditModule {}
