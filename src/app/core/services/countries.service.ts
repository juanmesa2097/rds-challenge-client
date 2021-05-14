import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { NgxGenericRestService } from 'ngx-grs';
import { Observable } from 'rxjs';
import { Country } from '../types';

@Injectable({
  providedIn: 'root',
})
export class CountriesService extends NgxGenericRestService {
  constructor() {
    super({
      baseUrl: '',
      resourceName: '',
    });
  }

  getAll(): Observable<Country[]> {
    return super.list<Country[]>({
      urlRewrite: `${environment.countriesApiV2}/all`,
    });
  }

  getByCodes(...codes: string[]): Observable<Country> {
    return super.list<Country>({
      urlRewrite: `${environment.countriesApiV2}/alpha?codes=${codes.join(
        ';'
      )}`,
    });
  }
}
