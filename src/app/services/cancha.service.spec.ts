import { TestBed } from '@angular/core/testing';

import { CanchaService } from './cancha.service';

describe('CanchaServiceService', () => {
  let service: CanchaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanchaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
