import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, tap, throwError } from "rxjs";

@Injectable()

export class XHeaderInterceptor implements HttpInterceptor {
    private base64 = btoa('HelloWb:admin')
    constructor(private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            const newReq = req.clone({
                    setHeaders: {
                        Authorization: `Basic ${this.base64}`
                    }
            })
        return next.handle(newReq)
        .pipe(
            tap((resp:any) => {
                console.log(resp)
            }),
            catchError( (error: HttpErrorResponse) => {
                if (error.status === 401) {
                this.router.navigate(['auth'])
                }
                console.log('Interceptor Error: ', error)
                return throwError(error);
            })
        )
    }
}