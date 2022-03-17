import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  template: `<app-header></app-header>
  <router-outlet></router-outlet>
  <app-nav></app-nav>`
})
export class BookComponent {}
