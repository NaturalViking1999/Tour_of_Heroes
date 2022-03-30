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
      tap(this.setToken),
      catchError(error => {
        console.log('Error: ', error.message) 
        return throwError(error)
      })
    )
  }

  register(user: User): Observable<any> {
    return this.http.post(this.urlReg, user)
  }

  refreshToken(token: string): Observable<any> {
    return this.http.post(this.urlUpdateKey, token)
    .pipe(
      tap(this.setToken)
    )
  }

  setToken(response: any | null) {
    if (response) {
      console.log(response)
      const expiresDate = new Date(new Date().getTime() + +7200000);
      localStorage.setItem('myToken', response.token);
      localStorage.setItem('date', expiresDate.toString());
      localStorage.setItem('myRefreshToken', response.refreshToken);
    }
  }

  get token() {
    if (new Date() > new Date(localStorage.getItem('date')!)) {
      this.refreshToken(localStorage.getItem('myRefreshToken')!)
      .subscribe(() => console.log('Token update'))
    }
    return localStorage.getItem('myToken')
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  logout() {
    this.setToken(null)
  }
}
