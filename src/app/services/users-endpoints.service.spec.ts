import { TestBed } from '@angular/core/testing';

import { UsersEndpointsService } from './users-endpoints.service';

describe('UsersEndpointsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersEndpointsService = TestBed.get(UsersEndpointsService);
    expect(service).toBeTruthy();
  });
});
