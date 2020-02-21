import { TestBed } from '@angular/core/testing';

import { SampleService } from './sample.service';

describe('SampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleService = TestBed.inject(SampleService);
    expect(service).toBeTruthy();
  });
});
