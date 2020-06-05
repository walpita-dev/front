import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { tap, map, take, catchError } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/ui/toaster/service/toast.service';


@Injectable()
export class AuthService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly toastService: ToastService,
  ) {}

  login(login: string, password: string): Observable<string> {
    return this.httpClient
    .post<{access_token: string}>('http://localhost:3000/auth/login', { login, password, appName: 'SKILVIOO_BACKOFFICE' })
    .pipe(
      tap((response) => {
        console.log('response : ', response);
        localStorage.setItem('access_token', response.access_token);
      }),
      map(r => r.access_token),
      catchError((error) => {
        console.log(error);
        this.toastService.error('Erreur lors de la connection', { autoClose: false, keepAfterRouteChange: true });
        return EMPTY;
      }),
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }
}
