import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { BookComponent } from './book.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LastPageComponent } from './last-page/last-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { TableBooksComponent } from './table-books/table-books.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { TitlePageComponent } from './title-page/title-page.component';

export const routesBook: Routes = [
  { path: '', component: BookComponent, canActivate: [AuthGuardService], children: [
    { path: '', redirectTo: '/titlepage', pathMatch: 'full'},
    { path: 'titlepage', component: TitlePageComponent},
    { path: 'firstpage', component: FirstPageComponent},
    { path: 'secondpage', component: SecondPageComponent},
    { path: 'thirdpage', component: ThirdPageComponent},
    { path: 'lastpage', component: LastPageComponent},
    { path: 'tablebooks', component: TableBooksComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routesBook)],
  exports: [RouterModule]
})
export class BookRoutingModule {}
