import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Breadcrumb } from '@app/core/interfaces/breadcrumbs.interface';
import { EmployeesPage } from './employees.page';

const routes = [
  {
    path: '',
    component: EmployeesPage,
    data: {
      breadcrumbs: [
        {
          name: 'Lista de empleados',
        },
      ] as Breadcrumb[],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
