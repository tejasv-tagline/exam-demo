import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingTeacherComponent } from './testing-teacher.component';

describe('TestingTeacherComponent', () => {
  let component: TestingTeacherComponent;
  let fixture: ComponentFixture<TestingTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
