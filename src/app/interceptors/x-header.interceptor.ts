import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, switchMap, tap, throwError } from "rxjs";
import { AuthService } from "../components/auth/auth.service";

@Injectable()

export class XHeaderInterceptor implements HttpInterceptor {
    constructor(private router: Router,
       private auth: AuthService) {}

       intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newReq = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('myToken')}`)
        });
    
        return next.handle(newReq)
        .pipe(
          catchError((err) => {
            // if (err.status === 401) {
            //   return this.auth.refreshToken(localStorage.getItem('myRefreshToken')!)
            //     .pipe(
            //       switchMap((res: any) => {
            //         localStorage.setItem('myToken', res.token);
            //         return next.handle(
            //           req.clone({
            //             headers: req.headers.set('Authorization', `Bearer ${res.token}`),
            //           })
            //         );
            //       }),
            //       catchError((err) => {
                    this.auth.logout();
                    return throwError(err);
            //       })
            //     );
            // }
    
            // return throwError(err);
          })
        );
      }
}