import { TestBed } from '@angular/core/testing';

import { ViewSingleExamResolver } from './view-single-exam.resolver';

describe('ViewSingleExamResolver', () => {
  let resolver: ViewSingleExamResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewSingleExamResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
