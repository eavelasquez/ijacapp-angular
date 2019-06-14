import { TestBed } from '@angular/core/testing';

import { CommunityActionService } from './community-action.service';

describe('CommunityActionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommunityActionService = TestBed.get(CommunityActionService);
    expect(service).toBeTruthy();
  });
});
