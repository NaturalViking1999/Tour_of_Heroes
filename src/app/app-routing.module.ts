import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './components/auth/auth-guard.service';
import { AuthComponent } from './components/auth/auth/auth.component';
import { RedirectDashboardGuardService } from './components/auth/redirect-dashboard-guard.service';
import { routesBook } from './components/book/book-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'heroes', component: HeroesComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: AuthComponent, canActivate:[RedirectDashboardGuardService]},
  { path: 'book', children: [...routesBook], canActivate: [AuthGuardService] },
  { path: 'resume', component: ResumeFormComponent, canActivate: [AuthGuardService]},
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
