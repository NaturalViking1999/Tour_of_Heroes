import { Component } from '@angular/core';

@Component({
  selector: 'app-first-page',
  template: `
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
      <p>Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации систем массового участия. С другой стороны рамки и место обучения кадров представляет собой интересный эксперимент проверки соответствующий условий активизации.</p>
      <p>Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании модели развития. Таким образом реализация намеченных плановых заданий способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. С другой стороны дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. </p>
  </main>
</div>
`,
  styles: [`img {
    height: 216px;
    width: 238px;
    margin-right: 10px;
    border-radius: 16px;
  }
  header {
    display: flex;
  }
  `]
})
export class FirstPageComponent {}