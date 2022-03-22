import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroServiceService2 } from './hero.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryDataService } from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { FenceCasePipe } from './fenceCase.pipe';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
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
    RainbowTextAnimationDirective
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
    BookModule
  ],
  providers: [HeroServiceService2],
  bootstrap: [AppComponent]
})
export class AppModule { }
