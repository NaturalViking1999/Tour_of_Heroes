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
      heroName: new FormControl([Validators.minLength(3)]) 
    })
  }

  onEvent(event: any) {
    this.heroValue = event.target.textContent;
  }

  onInput(event: any) {
    this.inputValue = event.target.value
  }

  addNewHero() {
    const formData = {...this.form.value};
    this.heroService.heroes.push({id: this.heroService.heroes.length + 1, name: this.inputValue});
    this.inputValue = '';
  }

  deleteHero(hrId: any) {
    console.log(hrId.textContent)
    this.heroService.heroes.splice(+hrId.textContent - 1, 1)
  }
}
