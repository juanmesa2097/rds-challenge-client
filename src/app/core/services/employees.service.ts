import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { NgxGenericRestService } from 'ngx-grs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService extends NgxGenericRestService {
  constructor() {
    super({
      baseUrl: environment.challengeApi,
      resourceName: 'employees',
    });
  }
}
