import { TestBed } from '@angular/core/testing';

import { ToursService } from '../tour/tour.service';

describe('ToursService', () => {
  let service: ToursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
