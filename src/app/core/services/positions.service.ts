import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { NgxGenericRestService } from 'ngx-grs';
import { Observable } from 'rxjs';
import { Position } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PositionsService extends NgxGenericRestService {
  constructor() {
    super({
      baseUrl: environment.challengeApiV1,
      resourceName: 'positions',
    });
  }

  getAll(): Observable<Position[]> {
    return super.list<Position[]>({
      mapFn: (res) => res.data,
    });
  }

  getByAreaId(id: number): Observable<Position[]> {
    return super.list<Position[]>({
      urlPostfix: `area/${id}`,
      mapFn: (res) => res.data,
    });
  }
}
