import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  template: `<div class="head">
  <h1>WH School</h1>
  <hr>
  <p id="title">Open your book</p>
  <div class="nav">
  <router-outlet></router-outlet>
    <nav class="nav-book">
      <a routerLink="/book/titlepage" routerLinkActive="active" class="btn">1</a>
      <a routerLink="/book/firstpage" routerLinkActive="active" class="btn">2</a>
      <a routerLink="/book/secondpage" routerLinkActive="active" class="btn">3</a>
      <a routerLink="/book/thirdpage" routerLinkActive="active" class="btn">4</a>
      <a routerLink="/book/lastpage" routerLinkActive="active" class="btn">5</a>
    </nav>
  </div>
  </div>`,
  styles: [`
  .head {
      height: 720px;
  }
  hr {
      width: 1000px;
  }
  .head a {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
  active {
      background: red;
  }
  #title {
    text-align: center;
    margin: 40px 0 40px 0;
    font-size: 40px;
    font-weight: bold;
    text-shadow: 5px 5px 10px grey;
  }
  `]
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
