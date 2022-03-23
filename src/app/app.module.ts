import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';

import { InMemoryDataService } from './services/in-memory-data.service';
import { HeroServiceService2 } from './services/hero.service';

import { FenceCasePipe } from './pipes/fenceCase.pipe';
import { TextModificatorDirective } from './directives/text-modificator.directive';
import { TextModificatorHostDirective } from './directives/text-modificator-host.directive';
import { RainbowTextAnimationDirective } from './directives/rainbow-text-animation.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    MessagesComponent,
    FenceCasePipe,
    TextModificatorDirective,
    TextModificatorHostDirective,
    RainbowTextAnimationDirective,
    ResumeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AuthModule,
    BookModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule
  ],
  providers: [HeroServiceService2],
  bootstrap: [AppComponent]
})
export class AppModule { }
