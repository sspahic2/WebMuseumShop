import { TestBed } from '@angular/core/testing';

import { StringToNumberService } from './string-to-number.service';

describe('StringToNumberService', () => {
  let service: StringToNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringToNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
