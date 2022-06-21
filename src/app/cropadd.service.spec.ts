import { TestBed } from '@angular/core/testing';

import { CropaddService } from './cropadd.service';

describe('CropaddService', () => {
  let service: CropaddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CropaddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
