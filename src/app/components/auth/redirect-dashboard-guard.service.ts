import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectDashboardGuardService {

  constructor(
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!localStorage.getItem('myToken')) {
      return true;
    } else {
      this.router.navigate(['dashboard']);
      return false;
    }
  }
}