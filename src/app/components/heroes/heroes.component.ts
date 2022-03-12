import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroServiceService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  form!: FormGroup;
  toggle: boolean = false;
  heroValue!: string;
  inputValue: string = '';

  constructor(public heroService: HeroServiceService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      heroName: new FormControl() 
    })
  }

  onEvent(event: any) {
    this.heroValue = event.target.textContent;
  }

  onInput(event: any) {
    this.inputValue = event.target.value
  }

  addNewHero() {
    if (this.inputValue.length >= 3) {
    this.heroService.heroes.push({id: this.heroService.heroes.length + 1, name: this.inputValue});
    this.inputValue = '';
    }
  }

  deleteHero(hrIndx: any, hero:any) {
    console.log(this.heroService.heroes.findIndex(item => {return item.id == hero.id}));
    this.heroService.heroes.splice(this.heroService.heroes.findIndex(item => item.id == hero.id), 1)
    // this.heroService.heroes.splice(+hrIndx.textContent - 1, 1)
  }
}
