import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { BooksService } from './books.service';

describe('BooksServiceTest', () => {
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let service: BooksService;
    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new BooksService(httpClientSpy);
    });

    it('should return expected books', (done: DoneFn) => {
        const expectedBooks =
        [{ id: 1, title: 'A', description: 'a' }, { id: 2, title: 'B', description: 'b' }];
       
        httpClientSpy.get.and.returnValue(of(expectedBooks));
        service.getBooks3().subscribe({
            next: books => {
                expect(books)
                .withContext('expected heroes')
                .toEqual(expectedBooks);
                done();
            },
            error: done.fail});
        });
});
