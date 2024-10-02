import { TestBed } from '@angular/core/testing';

import { CanchaServiceService } from './cancha.service.service';

describe('CanchaServiceService', () => {
  let service: CanchaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanchaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
