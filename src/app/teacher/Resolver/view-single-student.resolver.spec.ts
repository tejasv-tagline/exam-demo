import { TestBed } from '@angular/core/testing';

import { ViewSingleStudentResolver } from './view-single-student.resolver';

describe('ViewSingleStudentResolver', () => {
  let resolver: ViewSingleStudentResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewSingleStudentResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
