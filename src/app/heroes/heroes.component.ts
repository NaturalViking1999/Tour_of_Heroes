import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero } from '../hero';
import { HeroService, HeroServiceService2 } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  form!: FormGroup;
  toggle: boolean = false;
  heroValue!: string;
  inputValue: string = '';

  constructor(private heroService: HeroService, public heroService2: HeroServiceService2) {}

  ngOnInit(): void {
    this.getHeroes();
    this.form = new FormGroup({
      heroName: new FormControl() 
    })
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(items => (this.heroes = items));
  }

  onEvent(event: any) {
    this.heroValue = event.target.textContent;
  }

  onInput(event: any) {
    this.inputValue = event.target.value
  }

  addNewHero() {
    if (this.inputValue.length >= 3) {
    this.heroes.push({id: this.heroes.length + 1, name: this.inputValue});
    this.inputValue = '';
    }
  }

  deleteHero(hrIndx: any, hero:any) {
    // console.log(this.heroService.heroes.findIndex(item => {return item.id == hero.id}));
    this.heroes.splice(this.heroes.findIndex(item => item.id == hero.id), 1)
    // this.heroService.heroes.splice(+hrIndx.textContent - 1, 1)
  }
}
