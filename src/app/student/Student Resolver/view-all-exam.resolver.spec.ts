import { TestBed } from '@angular/core/testing';

import { ViewAllExamResolver } from './view-all-exam.resolver';

describe('ViewAllExamResolver', () => {
  let resolver: ViewAllExamResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewAllExamResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
