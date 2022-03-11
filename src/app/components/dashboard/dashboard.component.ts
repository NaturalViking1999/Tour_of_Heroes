import { Component, OnInit } from '@angular/core';
import { Hero, HeroServiceService2 } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
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
