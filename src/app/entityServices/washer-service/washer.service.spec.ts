import { TestBed } from '@angular/core/testing';

import { WasherService } from './washer.service';

describe('WasherService', () => {
  let service: WasherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WasherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
