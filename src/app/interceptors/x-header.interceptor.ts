import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "../components/auth/auth.service";

@Injectable()

export class XHeaderInterceptor implements HttpInterceptor {
    constructor(private router: Router,
       private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            const newReq = req.clone({
                    setHeaders: {
                        Authorization: `Bearer ${localStorage.getItem('myToken')}`,
                    }
            })
        return next.handle(newReq)
        .pipe(
            catchError( (error: HttpErrorResponse) => {
                if (error.status === 401) {
                    if (localStorage.getItem('myRefreshToken')) {
                        this.auth.refreshToken(localStorage.getItem('myRefreshToken')!)
                        .subscribe(response => {
                            localStorage.setItem('myToken', response.token);
                            return next.handle(
                                req.clone({
                                  headers: req.headers.set(
                                    'Authorization', `Bearer ${response.token}`
                                  ),
                                })
                              );
                        })
                    }
                    else {
                        this.auth.logout();
                        this.router.navigate(['login'], {
                         queryParams: {
                             authFailed: true
                         }
                        })
                    }
                }
                return throwError(error);
            })
        )
    }
}