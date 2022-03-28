import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";

@Injectable()

export class XHeaderInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            const newReq = req.clone({
                    headers: new HttpHeaders({'X-Header': Math.random().toString()})
            })
        return next.handle(newReq)
        .pipe(
            tap(() => {
                console.log(newReq)
            }),
            catchError( (error: HttpErrorResponse) => {
                console.log('Interceptor Error: ', error)
                return throwError(error);
            })
        )
    }
}