import { TestBed } from '@angular/core/testing';

import { SyllablesService } from './syllables-service';

describe('SyllablesService', () => {
  let service: SyllablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyllablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
