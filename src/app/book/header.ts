import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<h1>WH School</h1> <button mat-raised-button color="primary" routerLink="/tablebooks">Watch Books collection</button>
  <hr/>`,
  styles: [`button {
    color: white;
  }
  `]
})
export class HeaderComponent {}
