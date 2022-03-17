import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { LastPageComponent } from './last-page/last-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { TitlePageComponent } from './title-page/title-page.component';

const routesBook: Routes = [
  // { path: '', redirectTo: '/auth', pathMatch: 'full'},
  { path: 'book/titlepage', component: TitlePageComponent},
  { path: 'book/firstpage', component: FirstPageComponent},
  { path: 'book/secondpage', component: SecondPageComponent},
  { path: 'book/thirdpage', component: ThirdPageComponent},
  { path: 'book/lastpage', component: LastPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routesBook)],
  exports: [RouterModule]
})
export class BookRoutingModule {}
