import { TestBed } from '@angular/core/testing';

import { VerifiedStudentsResolver } from './verified-students.resolver';

describe('VerifiedStudentsResolver', () => {
  let resolver: VerifiedStudentsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(VerifiedStudentsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
