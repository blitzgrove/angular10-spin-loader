import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CrudService {
  constructor() { }

  upsertResponse = (source: Observable<any>): Observable<any> =>
    source.pipe(
      map((data: any) => {
        this.validate_and_upsert(data);
        return true;
      })
    );

  validate_and_upsert(data: any) {
    console.log('validating data...', data);
  }
}