import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
<nav class="nav-book">
      <a routerLink="/book/titlepage" routerLinkActive="active" class="btn">1</a>
      <a routerLink="/book/firstpage" routerLinkActive="active" class="btn">2</a>
      <a routerLink="/book/secondpage" routerLinkActive="active" class="btn">3</a>
      <a routerLink="/book/thirdpage" routerLinkActive="active" class="btn">4</a>
      <a routerLink="/book/lastpage" routerLinkActive="active" class="btn">5</a>
</nav>`,
  styles: [`
  a {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
  `]
})
export class NavComponent {}
