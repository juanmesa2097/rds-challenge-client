import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PathName } from '@app/core/enums';
import { Breadcrumb } from '@app/core/interfaces/breadcrumbs.interface';
import { AreasService } from '@app/core/services/areas.service';
import { CountriesService } from '@app/core/services/countries.service';
import { EmployeesService } from '@app/core/services/employees.service';
import { PositionsService } from '@app/core/services/positions.service';
import { Area, Country, Employee, Position } from '@app/core/types';
import { OperationType } from '@app/core/types/operation.type';
import { custom } from 'devextreme/ui/dialog';
import { forkJoin } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@Component({
  templateUrl: './employee-edit.page.html',
  styleUrls: ['./employee-edit.page.scss'],
})
export class EmployeeEditPage implements OnInit {
  @ViewChild('employeeForm') employeeForm!: EmployeeFormComponent;

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
    private countriesService: CountriesService
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

  onGoBack(): void {
    this.router.navigate(['/', PathName.Employees]);
  }

  onSave(employee: Employee): void {
    if (!employee.avatarUrl) {
      const avatar = this.getAvatarUrl();
      employee.avatarUrl = avatar;
    }

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
      employee: this.employeeService.getById(this.employeeId),
      countries: this.countriesService.getAll(),
      areas: this.areasService.getAll(),
    })
      .pipe(
        switchMap(({ employee, countries, areas }) => {
          this.employee = {
            ...employee,
            status: employee?.status || true,
          } as Employee;

          this.countries = countries;
          this.areas = areas;

          return this.positionsService.getByAreaId(employee?.areaId || 0);
        }),
        finalize(() => {
          this.canLoad = true;
          this.loading = false;
        })
      )
      .subscribe((positions) => (this.positions = positions));
  }

  private getAvatarUrl(): string {
    const rnd = Math.floor(Math.random() * 70);
    return `https://i.pravatar.cc/150?img=${rnd}`;
  }

  private async showConfirmDialog(): Promise<void> {
    const dialog = custom({
      title: '¡Registro exitoso! 🎉🎉🎉',
      messageHtml:
        'Los datos se guardaron correctamente.<br /> ¿Desea navegar a la lista de empleados o crear uno nuevo?',
      buttons: [
        {
          text: 'Ver empleados',
          type: 'default',
          onClick: () => {
            this.router.navigate(['/', PathName.Employees]);
          },
        },
        {
          text: 'Crear otro empleado',
          onClick: () => {
            this.employeeForm.resetForm();

            const controlToFocus =
              this.currentRoute === 'new' ? 'name' : 'dateOfBirth';
            this.employeeForm.focusControl(controlToFocus);
          },
        },
      ],
    });

    await dialog.show();
  }
}
