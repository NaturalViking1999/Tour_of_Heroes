import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.scss']
})
export class TableBooksComponent implements OnInit {
  books!: any;
  info!: any;
  toggle: boolean = false;
  selectedBook!: any;
  sum: number = 0;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getBooks()
    this.getBooks2()
  }

  getBooks() {
    this.booksService.getBooks()
    .subscribe(items => this.books = items.set1);
  }

  getBooks2() {
    this.booksService.getBooks()
    .subscribe(items => this.info = items.set2);
  }

  onSelect(book: {}) { 
    this.selectedBook = book; 
  }

  getSum() {
    for (let item of this.info.data) {
      this.sum += item.qtyRelease
    }
  }

}

// this.books = Object.values(items).map(item => item)