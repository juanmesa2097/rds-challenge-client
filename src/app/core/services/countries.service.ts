import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { NgxGenericRestService } from 'ngx-grs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService extends NgxGenericRestService {
  constructor() {
    super({
      baseUrl: environment.countriesApiV2,
      resourceName: 'all',
    });
  }
}
