import { TestBed } from '@angular/core/testing';

import { BankersService } from './bankers.service';

describe('BankersService', () => {
  let service: BankersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
