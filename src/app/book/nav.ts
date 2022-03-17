import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
<nav class="nav-book">
      <a routerLink="/book/titlepage" routerLinkActive="active">1</a>
      <a routerLink="/book/firstpage" routerLinkActive="active" >2</a>
      <a routerLink="/book/secondpage" routerLinkActive="active">3</a>
      <a routerLink="/book/thirdpage" routerLinkActive="active">4</a>
      <a routerLink="/book/lastpage" routerLinkActive="active">5</a>
</nav>`,
  styles: [`
  a {
    display: inline-block;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 20px;
    background: #8F07CF;
    margin: 0 10px;
    color: white;
    text-align: center;
    padding: 10px;
  }
  .active {
    background: red;
  }
  `]
})
export class NavComponent {}
