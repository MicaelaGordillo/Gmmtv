import { TestBed } from '@angular/core/testing';

import { CrudArtistsService } from './crud-artists.service';

describe('CrudArtistsService', () => {
  let service: CrudArtistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudArtistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
