import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PathName } from './core/enums';
import { NotFoundPage } from './pages/not-found/not-found.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: PathName.Employees,
    pathMatch: 'full',
  },
  {
    path: PathName.Employees,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@pages/employees/employees/employees.module').then(
            (m) => m.EmployeesModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('@pages/employees/employee-edit/employee-edit.module').then(
            (m) => m.EmployeeEditModule
          ),
      },
    ],
  },
  {
    path: '**',
    loadChildren: () =>
      import('@pages/not-found/not-found.module').then((m) => m.NotFoundModule),
    component: NotFoundPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
