import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpClient,
  HttpSentEvent,
  HttpUserEvent,
  HttpResponse,
  HttpProgressEvent,
  HttpHeaderResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map, switchMap, finalize, filter, take, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) {}

  isRefreshingToken = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: token,
      },
    });
  }

  logoutUser() {
    localStorage.clear();
    this.router.navigate(['auth/login']);
    document.location.reload();
  }

  handle401Error(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      // Reset here so that the following requests wait until the token
      // comes back from the refreshToken call.
      return this.httpClient.get('http://localhost:4200/auth/refresh-token', { responseType: 'text' })
        .pipe(
          switchMap((newToken: string) => {
            if (newToken) {
              this.tokenSubject.next(newToken);
              localStorage.setItem('access_token', newToken);
              return next.handle(this.addToken(req, newToken));
            }
            this.logoutUser();
          }),
          finalize(() => {
            this.isRefreshingToken = false;
          }),
        );
    }
    return this.tokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap((token) => {
          return next.handle(this.addToken(req, token));
        }),
    );

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent
  | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    const token = localStorage.getItem('access_token');
    const reqAuth = req;

    if (token) {
      return next.handle(this.addToken(reqAuth, token)).pipe(
        catchError((error) => {
          if (req.url.includes('refresh-token')) {
            this.logoutUser();
            return throwError(error);
          }
          if (error instanceof HttpErrorResponse) {
            switch ((<HttpErrorResponse>error).status) {
              case 401:
                return this.handle401Error(req, next);
              default:
                return throwError(error);
            }
          }
          return throwError(error);
        }),
      );
    }
    return next.handle(req);
  }
}
