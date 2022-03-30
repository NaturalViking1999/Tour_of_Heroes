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
    let bool: boolean;
    if (this.auth.isAuthenticated()) {
      bool = true
    } 
    else {
      bool = false
    }
    return bool
  }
}
