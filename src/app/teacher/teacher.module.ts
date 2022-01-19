import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { StudentDataListComponent } from './student-data-list/student-data-list.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';
import { UsersModule } from '../users/users.module';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { ViewSingleExamDetailComponent } from './view-single-exam-detail/view-single-exam-detail.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';


@NgModule({
  declarations: [
    StudentDataListComponent,
    ViewStudentDetailsComponent,
    CreateExamComponent,
    ViewExamComponent,
    ViewSingleExamDetailComponent,
    TeacherHomeComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[StudentDataListComponent]
})
export class TeacherModule { }
