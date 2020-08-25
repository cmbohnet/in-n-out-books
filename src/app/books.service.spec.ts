/**
 * Title: books.service.spec.ts
 * Author: Chris Bohnet
 * Date: 6 August 2020
 * Description: Service class spec module
 */

//imports
import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
