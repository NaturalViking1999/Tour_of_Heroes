import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, tap, throwError } from "rxjs";
import { AuthService } from "../components/auth/auth.service";

@Injectable()

export class XHeaderInterceptor implements HttpInterceptor {
    private base64 = btoa('HelloWb:admin')
    constructor(private router: Router,
       private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            const newReq = req.clone({
                    // setHeaders: {
                    //     Authorization: `Basic ${this.base64}`
                    // }
                    setHeaders: {
                        Authorization: `Bearer ${localStorage.getItem('myToken')}`
                    }
            })
        return next.handle(newReq)
        .pipe(
            // tap((resp:any) => {
            //     console.log(resp)
            // }),
            catchError( (error: HttpErrorResponse) => {
                if (error.status === 401) {
                   this.auth.logout();
                   this.router.navigate(['auth'], {
                    queryParams: {
                        authFailed: true
                    }
                   })
                }
                console.log('Interceptor Error: ', error)
                return throwError(error);
            })
        )
    }
}