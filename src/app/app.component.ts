import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './components/auth/auth.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1 id="animate" appRainbowTextAnimation>{{title | fencecase}}</h1>
  <h3 class="hide" appTextModificatorHost>My Heroes are the best Heroes!</h3>
  <p id="animate" class="hide" appRainbowTextAnimation>Animation for Sergey</p>
 
<div class="nav">
  <nav>
    <!-- <a routerLink="/login" routerLinkActive="active" class="btn">Auth</a> -->
    <a routerLink="/dashboard" routerLinkActive="active" class="btn">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active" class="btn">Heroes</a>
    <a routerLink="/book" routerLinkActive="active" class="btn">Book</a>
    <a routerLink="/resume" routerLinkActive="active" class="btn">Resume</a>
    <button class="btn red" (click)="logout()">Logout</button>
  </nav>
  <router-outlet></router-outlet>
</div>
<app-messages></app-messages>
</div>`,
  styles: [`
  .nav nav {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
  }
  #animate {
    padding: 10px 0 10px 0;
    font-weight: bold;
    font-size: 50px;
    diplay: block;
    text-align: center;
  }
  .hide {
    display: none;
  }
  .red {
    background: red;
  }
  `]
})
export class AppComponent implements OnInit{
  public title: string = 'Tour  of  Heroes';

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.updateAfterOut();
    this.updateToken();
  }

  updateToken() {
      setInterval(()=> {
        this.auth.refreshToken(localStorage.getItem('refreshToken')!)
        .subscribe()
      }, 60000)
  }

  updateAfterOut() {
    if (localStorage.getItem('refreshToken')) {
      this.auth.refreshToken(localStorage.getItem('refreshToken')!)
    .subscribe()
    }
    else {
      this.router.navigate(['login']);
    }
  }

  logout() {
    this.router.navigate(['login']);
    this.auth.logout();
  }
}
