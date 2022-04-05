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
        const expectedBooks = {
            set1: {
                data: [
                    { title: 'A', id: 1, description: 'a' }, 
                    { title: 'B', id: 2, description: 'b' }
                ]
            },
            set2: {
                data: [
                    { id: 1, releaseDate: '10-10-2022', qtyRelease: '100'},
                    { id: 2, releaseDate: '11-10-2022', qtyRelease: '1000'}
                ]
            }
        }

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
