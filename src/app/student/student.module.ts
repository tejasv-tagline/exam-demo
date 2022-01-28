import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ProfileComponent } from './profile/profile.component';

import { UsersModule } from '../users/users.module';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestingComponent } from './testing/testing.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ExamListComponent,
    ExamPaperComponent,
    StudentHomeComponent,
    TestingComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
