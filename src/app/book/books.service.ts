import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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
        catchError(error => {
          console.log('Error: ', error.message) 
          return throwError(error)
        })
      );
  }
}
