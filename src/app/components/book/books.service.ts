import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, map, tap } from 'rxjs';
import { BooksSet1, BooksSet2 } from './book.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private booksUrl = 'http://51.250.16.8:4500/books'; 

  constructor(public http: HttpClient) { }

  getBooks(): Observable<BooksSet1[]> {
    return this.http.get<BooksSet1[]>(this.booksUrl)
      .pipe(
        map((response: any) => response.set1.data),
        catchError(error => {
          console.log('Error: ', error.message) 
          return throwError(error)
        })
      );
  }

  getBooks2(): Observable<BooksSet2[]> {
    return this.http.get<BooksSet2[]>(this.booksUrl)
      .pipe(
        map((response: any) => response.set2.data),
        catchError(error => {
          console.log('Error: ', error.message) 
          return throwError(error)
        })
      );
  }
}
