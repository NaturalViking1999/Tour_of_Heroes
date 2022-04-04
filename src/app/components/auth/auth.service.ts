import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { User } from './auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = 'http://51.250.16.8:4500/login';
  private urlReg: string = 'http://51.250.16.8:4500/register';
  private urlUpdateKey: string = 'http://51.250.16.8:4500/update';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(this.url, user)
    .pipe(
      tap((res) => this.setToken(res)),
      catchError(error => {
        console.log('Error: ', error.message) 
        return throwError(error)
      })
    )
  }

  register(user: User): Observable<any> {
    return this.http.post(this.urlReg, user)
  }

  refreshToken(refreshToken: string): Observable<any> {
    return this.http.post(this.urlUpdateKey, {'refreshToken': refreshToken})
    .pipe(
      tap((res) => this.setToken(res))
    )
  }

  setToken(response: any | null) {
    if (response) {
      const expiresDate = new Date(new Date().getTime() + 60000);
      localStorage.setItem('myToken', response.token);
      localStorage.setItem('date', expiresDate.toString());
      if (response.refreshToken != null) {
        localStorage.setItem('refreshToken', response.refreshToken);
      }
    }
  }

  logout() {
    localStorage.removeItem('myToken');
    localStorage.removeItem('date');
    localStorage.removeItem('refreshToken');
  }
}