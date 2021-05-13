import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Breadcrumb } from '@app/core/interfaces/breadcrumbs.interface';
import { EmployeesService } from '@app/core/services/employees.service';
import { Employee } from '@app/core/types/employee.type';
import { Observable } from 'rxjs';
import { PathName } from 'src/app/core/enums';

@Component({
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {
  employees$!: Observable<Employee[]>;

  breadcrumbs: Breadcrumb[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private employeesService: EmployeesService
  ) {
    this.breadcrumbs = this.activatedRoute.snapshot.data.breadcrumbs;
  }

  ngOnInit(): void {
    this.employees$ = this.employeesService.getAll();
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
}
