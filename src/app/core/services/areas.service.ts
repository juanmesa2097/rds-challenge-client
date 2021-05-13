import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { NgxGenericRestService } from 'ngx-grs';
import { Observable } from 'rxjs';
import { Area } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AreasService extends NgxGenericRestService {
  constructor() {
    super({
      baseUrl: environment.challengeApiV1,
      resourceName: 'areas',
    });
  }

  getAll(): Observable<Area[]> {
    return super.list<Area[]>({
      mapFn: (res) => res.data,
    });
  }
}
