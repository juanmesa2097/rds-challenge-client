import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbsModule } from '@app/components/breadcrumbs/breadcrumbs.module';
import { PageHeaderWrapperModule } from '@app/components/page-header-wrapper/page-header-wrapper.module';
import { EmployeeEditRoutingModule } from './employee-edit-routing.module';
import { EmployeeEditPage } from './employee-edit.page';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@NgModule({
  declarations: [EmployeeEditPage, EmployeeFormComponent],
  imports: [
    CommonModule,
    EmployeeEditRoutingModule,
    PageHeaderWrapperModule,
    BreadcrumbsModule,
  ],
})
export class EmployeeEditModule {}
