import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "../components/auth/auth.service";

@Injectable()

export class XHeaderInterceptor implements HttpInterceptor {

    constructor(private router: Router, private auth: AuthService) {}

       intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newReq = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('myToken')}`)
        });
    
        return next.handle(newReq)
        .pipe(
          catchError((err: HttpErrorResponse) => {
            if (err.status === 401) {
              this.auth.logout();
              this.router.navigateByUrl('/login');
            }
            return throwError(() => err);
          })
        );
      }
}