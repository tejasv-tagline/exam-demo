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
import { UsersRoutingModule } from '../users/users-routing.module';
import { VerifyStudentDataComponent } from './verify-student-data/verify-student-data.component';
import { EditExamComponent } from './edit-exam/edit-exam.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    StudentDataListComponent,
    ViewStudentDetailsComponent,
    CreateExamComponent,
    ViewExamComponent,
    ViewSingleExamDetailComponent,
    TeacherHomeComponent,
    VerifyStudentDataComponent,
    EditExamComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports:[StudentDataListComponent]
})
export class TeacherModule { }
