import { TestBed } from '@angular/core/testing';

import { ExamPaperResolver } from './exam-paper.resolver';

describe('ExamPaperResolver', () => {
  let resolver: ExamPaperResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ExamPaperResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
