import { TestBed } from '@angular/core/testing';

import { DataPipeService } from './data-pipe.service';

describe('DataPipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataPipeService = TestBed.get(DataPipeService);
    expect(service).toBeTruthy();
  });
});
