import { TestBed } from '@angular/core/testing';

import { CoinkTestService } from './coink-test.service';

describe('CoinkTestService', () => {
  let service: CoinkTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinkTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
