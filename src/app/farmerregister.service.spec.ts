import { TestBed } from '@angular/core/testing';

import { FarmerregisterService } from './farmerregister.service';

describe('FarmerregisterService', () => {
  let service: FarmerregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
