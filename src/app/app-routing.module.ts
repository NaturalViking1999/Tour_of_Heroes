import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { routesBook } from './book/book-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'heroes', component: HeroesComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'book', children: [...routesBook] },
  { path: 'resume', component: ResumeFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
