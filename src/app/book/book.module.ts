import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePageComponent } from './title-page/title-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { LastPageComponent } from './last-page/last-page.component';
import { BookRoutingModule } from './book-routing.module';
import { HeadComponent } from './head.component';



@NgModule({
  declarations: [
    HeadComponent,
    TitlePageComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    LastPageComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  exports: [
    HeadComponent,
    TitlePageComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    LastPageComponent
  ]
})
export class BookModule { }
