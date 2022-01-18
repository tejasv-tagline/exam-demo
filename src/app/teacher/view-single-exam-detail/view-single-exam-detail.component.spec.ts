import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleExamDetailComponent } from './view-single-exam-detail.component';

describe('ViewSingleExamDetailComponent', () => {
  let component: ViewSingleExamDetailComponent;
  let fixture: ComponentFixture<ViewSingleExamDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSingleExamDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleExamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
