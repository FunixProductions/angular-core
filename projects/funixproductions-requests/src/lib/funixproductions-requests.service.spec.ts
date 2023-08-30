import { TestBed } from '@angular/core/testing';

import { FunixproductionsRequestsService } from './funixproductions-requests.service';

describe('FunixproductionsRequestsService', () => {
  let service: FunixproductionsRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunixproductionsRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
