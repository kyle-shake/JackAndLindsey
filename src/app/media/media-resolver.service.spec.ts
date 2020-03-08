import { TestBed } from '@angular/core/testing';

import { MediaResolverService } from './media-resolver.service';

describe('MediaResolverService', () => {
  let service: MediaResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
