import { TestBed } from '@angular/core/testing';

import { NoNavbarService } from './no-navbar.service';

describe('NoNavbarService', () => {
  let service: NoNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
