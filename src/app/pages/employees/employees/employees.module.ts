import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesPage } from './employees.page';

@NgModule({
  declarations: [EmployeesPage, EmployeesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeesPage,
      },
    ]),
    DxDataGridModule,
  ],
})
export class EmployeesModule {}
