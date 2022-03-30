import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from './auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = 'http://51.250.16.8:4500/login';
  private urlReg: string = 'http://51.250.16.8:4500/register';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(this.url, user)
    .pipe(
      tap(this.setToken)
    )
  }

  register(user: User): Observable<any> {
    return this.http.post(this.urlReg, user)
  }

  setToken(response: any | null) {
    if (response) {
      console.log(response)
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('myToken', response.token);
      localStorage.setItem('token-exp', expDate.toString());
    }
    else {
      localStorage.clear();
    }
  }

  get token() {
    return localStorage.getItem('myToken')
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  logout() {
    this.setToken(null)
  }
}
