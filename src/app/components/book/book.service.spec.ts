// import { HttpClient } from '@angular/common/http';
// // import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { EMPTY, of } from 'rxjs';
// import { BooksService } from './books.service';
// import { TableBooksComponent } from './table-books/table-books.component';

// describe('BookServiceTest', () => {
//   let service: BooksService;
//   let httpClientSpy: jasmine.SpyObj<HttpClient>;
//   let component: TableBooksComponent;

//   beforeEach(async () => {
//     httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
//     service = new BooksService(httpClientSpy);
//     component = new TableBooksComponent(service);
//   });

//   it('should get json', () => {
//     httpClientSpy.get.and.returnValue(of('mock'));
//     const spy = spyOn(service, 'getBooks').and.callFake(() => {
//       return EMPTY
//     })
//     component.ngOnInit();
//     expect(spy).toHaveBeenCalled();
//   });

//   it('should get2 json', () => {
//     httpClientSpy.get.and.returnValue(of('mock'));
//     const spy = spyOn(service, 'getBooks2').and.callFake(() => {
//       return EMPTY
//     })
//     component.ngOnInit();
//     expect(spy).toHaveBeenCalled();
//   });
// });
