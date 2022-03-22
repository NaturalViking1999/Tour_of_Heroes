import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1 appTextModificator>{{title | fencecase}}</h1>
  <h3 appTextModificatorHost>My Heroes are the best Heroes!</h3>
  <p id="animate" class="anim-text-flow" appRainbowTextAnimation><span>
  Animation for Sergey
  </span></p>
 
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
  #animate {
    padding: 10px 0 10px 0;
    font-weight: bold;
    font-size: 50px;
  }
  #block {
    display: block;
  }`]
})
export class AppComponent {
  public title: string = 'Tour  of  Heroes';
}
