import { TestBed } from '@angular/core/testing';

import { HttpTestService } from './http-test.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('HttpTestService', () => {
  let service: HttpTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
