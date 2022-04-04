import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { BooksService } from '../books.service';
import { TableBooksComponent } from './table-books.component';

describe('TableBooksComponentTest', () => {
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let service: BooksService;
    let component: TableBooksComponent;

    beforeEach(async () => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', {
          'get': of('mock')
        });
        service = new BooksService(httpClientSpy);
        component = new TableBooksComponent(service);
      });

    it('should bookInfo set1 length', () => {
      service.getBooks().subscribe((items)=>{
        expect(items.length).toBe(6);
      })
    })

    it('should bookInfo set2 length', () => {
        service.getBooks2().subscribe((items)=>{
          expect(items.length).toBe(6);
        })
      })

});
