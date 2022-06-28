import { TestBed } from '@angular/core/testing';

import { DjangularService } from './djangular.service';

describe('DjangularService', () => {
  let service: DjangularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DjangularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
