import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>{{title | fencecase}}</h1>
 
<div class="nav">
  <nav>
    <a routerLink="/auth" routerLinkActive="active" class="btn">Auth</a>
    <a routerLink="/dashboard" routerLinkActive="active" class="btn">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active" class="btn">Heroes</a>
    <a routerLink="/book" routerLinkActive="active" class="btn">Book</a>
  </nav>
  <router-outlet></router-outlet>
</div>
<app-messages></app-messages>
</div>`,
  styles: [`
  .nav nav {
    margin-bottom: 30px;
  }
  `]
})
export class AppComponent {
  public title: string = 'Tour  of  Heroes';
}
