import { TestBed } from '@angular/core/testing';

import { DisconnectionGuard } from './disconnection.guard';

describe('DisconnectionGuard', () => {
  let guard: DisconnectionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DisconnectionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
