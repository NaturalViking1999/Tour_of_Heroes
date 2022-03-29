import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Hero } from '../hero.interface';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private heroesUrl = 'http://localhost:4200/api/heroes.json'; 
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(
    public http: HttpClient,
    public messageService: MessagesService) { }
  
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl, {
      // headers: {
      //   Authorization: `Basic ${this.base64}`
      // }
    })
      .pipe(
        tap(_ => this.log('fetched heroes')),
        map((response: any) => response.data),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

}

export class HeroServiceService2 {
  public heroes2: Hero[] = [
    {id: 5, name: 'Sergey Lazarenkov'},
    {id: 7, name: 'Big $anya'},
    {id: 11, name: 'Ass Hacker'},
    {id: 12, name: 'Vitalic Klitchko'}
  ];
}
