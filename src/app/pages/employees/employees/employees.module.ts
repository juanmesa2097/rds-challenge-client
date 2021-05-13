import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbsModule } from '@app/components/breadcrumbs/breadcrumbs.module';
import { PageHeaderWrapperModule } from '@app/components/page-header-wrapper/page-header-wrapper.module';
import { DxSpeedDialActionModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesPage } from './employees.page';

@NgModule({
  declarations: [EmployeesPage, EmployeesListComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    PageHeaderWrapperModule,
    BreadcrumbsModule,
    DxDataGridModule,
    DxSpeedDialActionModule,
  ],
})
export class EmployeesModule {}
