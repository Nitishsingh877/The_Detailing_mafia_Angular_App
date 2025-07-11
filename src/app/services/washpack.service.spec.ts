import { TestBed } from '@angular/core/testing';

import { WashpackService } from './WasherService';

describe('WashpackService', () => {
  let service: WashpackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WashpackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
