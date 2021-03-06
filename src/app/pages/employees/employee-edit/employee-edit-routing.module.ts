import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PathName } from '@app/core/enums';
import { Breadcrumb } from '@app/core/interfaces/breadcrumbs.interface';
import { EmployeeEditPage } from './employee-edit.page';

function getRouteData(lastBreadcrumbName: string) {
  return {
    breadcrumbs: [
      {
        name: 'Lista de empleados',
        path: PathName.Employees,
      },
      {
        name: lastBreadcrumbName,
      },
    ] as Breadcrumb[],
  };
}

const routes = [
  {
    path: 'new',
    component: EmployeeEditPage,
    data: getRouteData('Crear empleado'),
  },
  {
    path: ':id/edit',
    component: EmployeeEditPage,
    data: getRouteData('Editar empleado'),
  },
  {
    path: ':id/preview',
    component: EmployeeEditPage,
    data: getRouteData('Ver empleado'),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeEditRoutingModule {}
