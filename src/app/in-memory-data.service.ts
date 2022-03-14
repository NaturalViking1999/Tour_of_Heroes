import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from 'src/app/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
    {id: 1, name: 'Antimage'},
    {id: 2, name: 'Bristleback'}, 
    {id: 3, name: 'Centaur Warrunner'}, 
    {id: 4, name: 'Lina'}, 
    {id: 5, name: 'Sergey Lazarenkov'},
    {id: 6, name: 'Mr President'},
    {id: 7, name: 'Big Sanya'},
    {id: 8, name: 'Anime Fan'},
    {id: 9, name: 'Bidlo'},
    {id: 10, name: 'Jew'},
    {id: 11, name: 'Ass Hacker'},
    {id: 12, name: 'Vitalic Klitchko'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 13;
  }
}