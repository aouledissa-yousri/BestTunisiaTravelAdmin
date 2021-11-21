import { TestBed } from '@angular/core/testing';

import { ConnectionGuard } from './connection.guard';

describe('ConnectionGuard', () => {
  let guard: ConnectionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConnectionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
