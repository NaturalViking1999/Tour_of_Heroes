import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './components/auth/auth-guard.service';
import { AuthComponent } from './components/auth/auth/auth.component';
import { routesBook } from './components/book/book-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '*', redirectTo: '/login'},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'heroes', component: HeroesComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: AuthComponent},
  { path: 'book', children: [...routesBook], canActivate: [AuthGuardService] },
  { path: 'resume', component: ResumeFormComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
