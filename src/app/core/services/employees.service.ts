import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { NgxGenericRestService } from 'ngx-grs';
import { Observable, of } from 'rxjs';
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

  getAll(): Observable<Employee[]> {
    return super.list<Employee[]>({
      mapFn: (res) => res.data,
    });
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
