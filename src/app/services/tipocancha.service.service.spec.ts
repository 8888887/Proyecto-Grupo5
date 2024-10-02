import { TestBed } from '@angular/core/testing';

import { TipocanchaServiceService } from './tipocancha.service.service';

describe('TipocanchaServiceService', () => {
  let service: TipocanchaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipocanchaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
