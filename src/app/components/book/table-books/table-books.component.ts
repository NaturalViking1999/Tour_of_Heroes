import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { Book } from '../book.interfaces';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.scss']
})
export class TableBooksComponent implements OnInit, OnDestroy {
  toggle: boolean = false;
  selectedBook!: Book;
  bookInfo: any = [];
  expandedElement: Book | null = null;
  sum: number = 0;

  myStream$: Subscription = new Subscription();

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  ngOnDestroy(): void {
    if(this.myStream$) {
      this.myStream$.unsubscribe();
    }
  }

  getBooks(): void {
    this.myStream$ = forkJoin({ 
      firstStream: this.booksService.getBooks(), 
      secondStream: this.booksService.getBooks2()
    })
    .subscribe( ({firstStream, secondStream}) => {
      firstStream.forEach(item => secondStream.forEach(item2 => {
        if(item['id'] === item2['id']) {
          this.bookInfo.push(Object.assign({}, item, item2));
          this.sum += Number(item2.qtyRelease)
        }
      }))
    })
  }

  onSelect(book: Book): void { 
    this.selectedBook = book;
  }
  
}