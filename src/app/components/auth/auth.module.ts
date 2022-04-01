import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { RedirectDashboardGuardService } from './redirect-dashboard-guard.service';



@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    RouterModule.forChild([
      {path: 'register', component: RegisterComponent, canActivate:[RedirectDashboardGuardService]}
    ])
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
