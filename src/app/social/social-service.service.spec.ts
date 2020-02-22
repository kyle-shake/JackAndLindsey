import { TestBed } from '@angular/core/testing';

import { SocialServiceService } from './social-service.service';

describe('SocialServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialServiceService = TestBed.get(SocialServiceService);
    expect(service).toBeTruthy();
  });
});
