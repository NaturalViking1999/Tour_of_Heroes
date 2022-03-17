import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-page',
  template: `<h1>WH School</h1>
  <hr>
  <div>
  <header>
      <h2>Main heading</h2>
      <p>Идейные соображения высшего порядка, а также сложившаяся структура организации позволяет оценить значение новых предложений. Равным образом рамки и место обучения кадров представляет собой интересный эксперимент проверки существенных финансовых и административных условий.  </p>
      <p>Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации систем массового участия. С другой стороны рамки и место обучения кадров представляет собой интересный эксперимент проверки соответствующий условий активизации.</p>
  </header>

  <main>
      <div>
      <p>Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации систем массового участия. С другой стороны рамки и место обучения кадров представляет собой интересный эксперимент проверки соответствующий условий активизации.</p>
      <p>Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании модели развития. Реализация намеченных плановых заданий способствует подготовки и реализации системы обучения кадров. Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании модели развития.   </p>
  </div>
  <div>
      <img src="https://via.placeholder.com/238x216" alt="">
  </div>
  </main>
</div>
<nav class="nav-book">
      <a routerLink="/book/titlepage" routerLinkActive="active" class="btn">1</a>
      <a routerLink="/book/firstpage" routerLinkActive="active" class="btn">2</a>
      <a routerLink="/book/secondpage" routerLinkActive="active" class="btn">3</a>
      <a routerLink="/book/thirdpage" routerLinkActive="active" class="btn">4</a>
      <a routerLink="/book/lastpage" routerLinkActive="active" class="btn">5</a>
</nav>`,
  styles: [`img {
    height: 216px;
    width: 238px;
    margin-left: 30px;
    border-radius: 16px;
  }
  main {
    display: flex;
  }
  a {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 20px;
  }`]
})
export class LastPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
