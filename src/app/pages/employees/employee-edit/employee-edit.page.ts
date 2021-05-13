import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PathName } from '@app/core/enums';
import { Breadcrumb } from '@app/core/interfaces/breadcrumbs.interface';
import { AreasService } from '@app/core/services/areas.service';
import { CountriesService } from '@app/core/services/countries.service';
import { EmployeesService } from '@app/core/services/employees.service';
import { PositionsService } from '@app/core/services/positions.service';
import { ToastsService } from '@app/core/services/toasts.service';
import { Area, Country, Employee, Position } from '@app/core/types';
import { OperationType } from '@app/core/types/operation.type';
import { confirm } from 'devextreme/ui/dialog';
import { forkJoin, from, of } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './employee-edit.page.html',
  styleUrls: ['./employee-edit.page.scss'],
})
export class EmployeeEditPage implements OnInit {
  employeeId!: number;

  employee!: Employee | null;
  countries!: Country[];
  areas!: Area[];
  positions!: Position[];

  canLoad = false;
  loading = false;

  breadcrumbs: Breadcrumb[];
  currentRoute!: OperationType;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeesService,
    private positionsService: PositionsService,
    private areasService: AreasService,
    private countriesService: CountriesService,
    private toastsService: ToastsService
  ) {
    const snapshot = this.activatedRoute.snapshot;

    this.employeeId = +snapshot.paramMap.get('id')!;

    const { url } = snapshot;
    this.currentRoute = url[url.length - 1].path as OperationType;

    this.breadcrumbs = snapshot.data.breadcrumbs;
  }

  ngOnInit(): void {
    this.fetchData();
  }

  onChangeArea(areaId: number): void {
    this.positionsService
      .getByAreaId(areaId)
      .subscribe((positions) => (this.positions = positions));
  }

  onSave(employee: Employee): void {
    this.loading = true;

    this.employeeService
      .createOrUpdate(employee)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((result) => {
        if (result) {
          this.showConfirmDialog();
        }
      });
  }

  private fetchData(): void {
    this.loading = true;

    forkJoin({
      employee: this.employeeId
        ? this.employeeService.getById(this.employeeId)
        : of(null),
      countries: this.countriesService.getAll(),
      areas: this.areasService.getAll(),
    })
      .pipe(
        switchMap(({ employee, countries, areas }) => {
          this.employee = employee;
          this.countries = countries;
          this.areas = areas;

          return employee?.areaId
            ? this.positionsService.getByAreaId(employee.areaId)
            : from([]);
        }),
        finalize(() => {
          this.canLoad = true;
          this.loading = false;
        })
      )
      .subscribe((positions) => (this.positions = positions));
  }

  private async showConfirmDialog(): Promise<void> {
    await confirm(
      'Los datos se guardaron correctamente.<br /> ¿Desea navegar a la lista de empleados?',
      '¡Registro exitoso! 🎉🎉🎉'
    ).then((confirmed) => {
      if (confirmed) {
        this.router.navigate(['/', PathName.Employees]);
      }
    });
  }
}
