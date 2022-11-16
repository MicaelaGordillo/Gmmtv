import { TestBed } from '@angular/core/testing';

import { CrudSongsService } from './crud-songs.service';

describe('CrudSongsService', () => {
  let service: CrudSongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudSongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
