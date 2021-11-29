import { TestBed } from '@angular/core/testing';

import { DisconnectedGuard } from './disconnected.guard';

describe('DisconnectedGuard', () => {
  let guard: DisconnectedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DisconnectedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
