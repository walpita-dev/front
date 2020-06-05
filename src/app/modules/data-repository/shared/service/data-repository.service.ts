import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, take } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { CompleteResourceDto } from '../model/complete-resource.dto';


@Injectable()
export class DataRepositoryService {

  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  completeSearch = (type: 'resource' | 'job' | 'activity', lang: 'FR' | 'EN', text: string): Observable<CompleteResourceDto[]> => {
    let url = '';
    switch (type) {
      case 'resource':
        url = `http://localhost:3000/resource/search?lang=${lang}&text=${text}`;
        break;
      case 'job':
        url = `http://localhost:3000/job/complete-search?lang=${lang}&text=${text}`;
        break;
      case 'activity':
        url = `http://localhost:3000/activity/complete-search?lang=${lang}&text=${text}`;
        break;
    }
    return this.httpClient.get<CompleteResourceDto[]>(url, {}).pipe(
      catchError((err) => {
        return EMPTY;
      }),
      take(1),
    );
  }

}
