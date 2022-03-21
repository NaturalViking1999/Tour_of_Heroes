import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePageComponent } from './title-page/title-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { LastPageComponent } from './last-page/last-page.component';
import { BookRoutingModule } from './book-routing.module';
import { HeaderComponent } from './header';
import { NavComponent } from './nav';
import { BookComponent } from './book.component';
import { TableBooksComponent } from './table-books/table-books.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    TitlePageComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    LastPageComponent,
    HeaderComponent,
    NavComponent,
    BookComponent,
    TableBooksComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class BookModule { }
