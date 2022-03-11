export interface Hero{
  name: string;
  id: number;
}

export class HeroServiceService {
  public heroes: Array<Hero> = [
    {id: 1, name: 'Antimage'},
    {id: 2, name: 'Bristleback'}, 
    {id: 3, name: 'Centaur Warrunner'}, 
    {id: 4, name: 'Lina'}, 
    {id: 5, name: 'Sergey Lazarenkov'},
    {id: 6, name: 'Mr President'},
    {id: 7, name: 'Big $anya'},
    {id: 8, name: 'Anime Fan'},
    {id: 9, name: 'Bidlo'},
    {id: 10, name: 'Jew'},
    {id: 11, name: 'Ass Hacker'},
    {id: 12, name: 'Vitalic Klitchko'}
  ];
}

export class HeroServiceService2 {
  public heroes: Array<Hero> = [
    {id: 5, name: 'Sergey Lazarenkov'},
    {id: 7, name: 'Big $anya'},
    {id: 11, name: 'Ass Hacker'},
    {id: 12, name: 'Vitalic Klitchko'}
  ];
}
