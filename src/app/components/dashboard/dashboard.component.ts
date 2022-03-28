import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroServiceService2 } from '../../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
  .dashboard {
    display: flex;
  }
  
  li {
    padding: 20px 30px;
  }
  
  .flex {
    display: flex;
  }
  
  .hero-info input {
    margin-left: 10px;
    width: 200px;
  }`]
})
export class DashboardComponent implements OnInit {

  toggle: boolean = false;
  selectedHero!: Hero;

  constructor(public heroService: HeroServiceService2) { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero) { 
    this.selectedHero = hero; 
  }
}
