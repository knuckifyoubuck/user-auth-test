import { TestBed } from '@angular/core/testing';

import { ProfileAccessGuard } from './profile-access.guard';

describe('ProfileAccessGuard', () => {
  let guard: ProfileAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfileAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
