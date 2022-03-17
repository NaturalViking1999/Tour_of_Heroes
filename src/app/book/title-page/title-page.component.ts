import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-page',
  template: `<h1>WH School</h1>
  <hr>
  <div>
  <header>
      <div>
          <img src="https://via.placeholder.com/236x218" alt="">
      </div>
      <div>
          <h2>Main heading</h2>
          <p>Идейные соображения высшего порядка, а также сложившаяся структура организации позволяет оценить значение новых предложений. Равным образом рамки и место обучения кадров представляет собой интересный эксперимент проверки существенных финансовых и административных условий. </p>
          <p>Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития.</p></div>
  </header>

  <main>
      <h3>Secondary heading</h3>
      <p>Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации систем массового участия. С другой стороны рамки и место обучения кадров представляет собой интересный эксперимент проверки соответствующий условий активизации.</p>
      <p>Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании модели развития. Таким образом реализация намеченных плановых заданий способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. </p>
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
    margin-right: 10px;
  }
  header {
    display: flex;
  }
  a {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
  `]
})
export class TitlePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
