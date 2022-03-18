import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, map } from 'rxjs';
import { Books } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private booksUrl = 'api/books'; 

  constructor(public http: HttpClient) { }

  getBooks(): Observable<Books> {
    return this.http.get<Books>(this.booksUrl, {params: new HttpParams()})
      .pipe(
        map((data: any) => { return data.set1
        }),
        catchError(error => {
          console.log('Error: ', error.message) 
          return throwError(error)
        })
      );
  }

  getBooks2(): Observable<Books> {
    return this.http.get<Books>(this.booksUrl, {params: new HttpParams()})
      .pipe(
        map((data: any) => { return data.set2
        }),
        catchError(error => {
          console.log('Error: ', error.message) 
          return throwError(error)
        })
      );
  }
}
