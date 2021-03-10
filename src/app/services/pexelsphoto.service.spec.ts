import { TestBed } from '@angular/core/testing';

import { PexelsphotoService } from './pexelsphoto.service';

describe('PxelphotoService', () => {
  let service: PexelsphotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PexelsphotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
