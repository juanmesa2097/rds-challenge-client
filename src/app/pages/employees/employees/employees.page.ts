import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
      .subscribe((employees) => {
        this.employees = employees;
      });
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
