import { TestBed } from '@angular/core/testing';

import { ServicelocService } from './serviceloc.service';

describe('ServicelocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicelocService = TestBed.get(ServicelocService);
    expect(service).toBeTruthy();
  });
});
