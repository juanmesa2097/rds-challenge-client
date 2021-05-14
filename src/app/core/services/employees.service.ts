import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { NgxGenericRestService } from 'ngx-grs';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { WrapperResult } from '../interfaces';
import { Employee } from '../types';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService extends NgxGenericRestService {
  constructor() {
    super({
      baseUrl: environment.challengeApiV1,
      resourceName: 'employees',
    });
  }

  getAll(): Observable<{
    employees: Employee[];
    totalCount: number;
    activeEmployeesCount: number;
    inactiveEmployeesCount: number;
  }> {
    return super.list<WrapperResult<Employee[]>>().pipe(
      map(({ data, meta }) => ({
        employees: data,
        totalCount: meta?.count || 0,
        activeEmployeesCount: data.filter((e) => e.status).length,
        inactiveEmployeesCount: data.filter((e) => !e.status).length,
      }))
    );
  }

  getById(id: number): Observable<Employee | null> {
    if (!id) {
      return of(null);
    }

    return super.single<Employee>(id);
  }

  createOrUpdate(employee: Employee): Observable<Employee> {
    const { id } = employee;
    return id ? super.update(id, employee) : super.add(employee);
  }
}
