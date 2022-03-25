import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<h1>WH School</h1> 
  <div>
  <button mat-raised-button color="primary" routerLink="/tablebooks">Watch Books collection</button>
  <app-book-chart></app-book-chart>
  </div>
  <hr/>`,
  styles: [`button {
    color: white;
  }
  `]
})
export class HeaderComponent {}
