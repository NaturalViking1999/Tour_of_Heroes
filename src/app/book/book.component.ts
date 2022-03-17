import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  template: `<app-header></app-header>
  <router-outlet></router-outlet>
  <app-nav></app-nav>`
})
export class BookComponent implements OnInit {

  ngOnInit(): void {
    this.goToTitlePage()
  }

  goToTitlePage() {
    if (window.location.href === "http://localhost:4200/book")
    window.location.replace("http://localhost:4200/book/titlepage")
  }
}
