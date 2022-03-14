import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>{{title}}</h1>
 
<div class="nav">
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active" class="btn">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active" class="btn">Heroes</a>
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
  public title: string = 'Tour of Heroes';
}
