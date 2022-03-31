import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private auth: AuthService
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isAuthenticated()
  }
}
