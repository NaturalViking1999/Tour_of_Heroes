import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  template: `<h1>WH School</h1>
  <hr>
  <div>
  <header>
      <img src="https://via.placeholder.com/370x216" alt="">
      <h2>Main heading</h2>
      <p>Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации систем массового участия. С другой стороны рамки и место обучения кадров представляет собой интересный эксперимент проверки соответствующий условий активизации. </p>
      <p>Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании модели развития. Таким образом реализация намеченных плановых заданий способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. </p>
  </header>
</div>
<nav class="nav-book">
      <a routerLink="/book/titlepage" routerLinkActive="active" class="btn">1</a>
      <a routerLink="/book/firstpage" routerLinkActive="active" class="btn">2</a>
      <a routerLink="/book/secondpage" routerLinkActive="active" class="btn">3</a>
      <a routerLink="/book/thirdpage" routerLinkActive="active" class="btn">4</a>
      <a routerLink="/book/lastpage" routerLinkActive="active" class="btn">5</a>
</nav>`,
  styles: [`img {
    margin-left: calc(50vw - 370px);
    height: 216px;
    width: 370px;
    margin-right: 10px;
    border-radius: 16px;
  }
  a {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 20px;
  }`
]
})
export class SecondPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
