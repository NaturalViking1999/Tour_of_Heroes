import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  template: `
  <div>
  <header>
      <img src="https://via.placeholder.com/370x216" alt="">
      <h2>Main heading</h2>
      <p>Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации систем массового участия. С другой стороны рамки и место обучения кадров представляет собой интересный эксперимент проверки соответствующий условий активизации. </p>
      <p>Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании модели развития. Таким образом реализация намеченных плановых заданий способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. </p>
  </header>
</div>`,
  styles: [`img {
    margin-left: calc(50vw - 370px);
    height: 216px;
    width: 370px;
    margin-right: 10px;
    border-radius: 16px;
  }`
]
})
export class SecondPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
