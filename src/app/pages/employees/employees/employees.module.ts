import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbsModule } from '@app/components/breadcrumbs/breadcrumbs.module';
import { PageContentWrapperModule } from '@app/components/page-content-wrapper/page-content-wrapper.module';
import { PageHeaderWrapperModule } from '@app/components/page-header-wrapper/page-header-wrapper.module';
import { StatsModule } from '@app/components/stats/stats.module';
import { DxButtonModule, DxLoadPanelModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesNotFoundComponent } from './employees-not-found/employees-not-found.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesPage } from './employees.page';

@NgModule({
  declarations: [
    EmployeesPage,
    EmployeesListComponent,
    EmployeesNotFoundComponent,
    EmployeeStatusComponent,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    PageHeaderWrapperModule,
    PageContentWrapperModule,
    BreadcrumbsModule,
    StatsModule,
    DxDataGridModule,
    DxButtonModule,
    DxLoadPanelModule,
  ],
})
export class EmployeesModule {}
