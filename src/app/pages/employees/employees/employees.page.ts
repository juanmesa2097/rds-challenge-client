import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoStats } from '@app/components/stats/stats.interface';
import { Breadcrumb } from '@app/core/interfaces/breadcrumbs.interface';
import { EmployeesService } from '@app/core/services/employees.service';
import { ToastsService } from '@app/core/services/toasts.service';
import { Employee } from '@app/core/types/models/employee.type';
import { finalize } from 'rxjs/operators';
import { PathName, ResponseSuccessMessage } from 'src/app/core/enums';

@Component({
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {
  employees: Employee[] = [];
  stats: InfoStats[] = [];

  breadcrumbs: Breadcrumb[];

  canLoad = false;
  loading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private employeesService: EmployeesService,
    private toastsService: ToastsService
  ) {
    this.breadcrumbs = this.activatedRoute.snapshot.data.breadcrumbs;
  }

  ngOnInit(): void {
    this.loading = true;

    this.employeesService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        ({
          employees,
          totalCount,
          activeEmployeesCount,
          inactiveEmployeesCount,
        }) => {
          console.log(totalCount, activeEmployeesCount, inactiveEmployeesCount);
          this.employees = employees;

          this.stats.push({
            name: 'Total',
            value: totalCount,
            imgPath: 'https://img.icons8.com/nolan/64/add-database.png',
            className: 'bg-success-100',
          });

          this.stats.push({
            name: 'Empleados activos',
            value: activeEmployeesCount,
            imgPath: 'https://img.icons8.com/nolan/64/myspace.png',
            className: 'bg-success-100',
          });

          this.stats.push({
            name: 'Empleados inactivos',
            value: inactiveEmployeesCount,
            imgPath: 'https://img.icons8.com/nolan/64/privacy.png',
            className: 'bg-success-100',
          });
        }
      );
  }

  onClickNew(): void {
    this.router.navigate([PathName.Employees, 'new']);
  }

  onClickEdit(id: number): void {
    this.router.navigate([PathName.Employees, id, 'edit']);
  }

  onClickPreview(id: number): void {
    this.router.navigate([PathName.Employees, id, 'preview']);
  }

  onDeleteEmployee(employeeId: number): void {
    this.loading = true;

    this.employeesService
      .delete(employeeId)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((result) => {
        if (result) {
          this.toastsService.showSuccess(ResponseSuccessMessage.Delete);
        }
      });
  }

  onCreateEmployee(): void {
    this.router.navigate([PathName.Employees, 'new']);
  }
}
