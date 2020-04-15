import { TestBed } from '@angular/core/testing';

import { CurriculumService } from './curriculum.service';

describe('CurriculumService', () => {
  let service: CurriculumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
