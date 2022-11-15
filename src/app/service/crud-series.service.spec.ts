import { TestBed } from '@angular/core/testing';

import { CrudSeriesService } from './crud-series.service';

describe('CrudSeriesService', () => {
  let service: CrudSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
