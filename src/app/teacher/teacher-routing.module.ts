import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { StudentDataListComponent } from './student-data-list/student-data-list.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { VerifyStudentDataComponent } from './verify-student-data/verify-student-data.component';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { ViewSingleExamDetailComponent } from './view-single-exam-detail/view-single-exam-detail.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherHomeComponent,
  },
  // {
  //   path: 'teacher/:name/:email',
  //   component: TeacherHomeComponent,
  // },
  {
    path: 'studentDataList',
    component: StudentDataListComponent,
  },
  {
    path: 'viewDetails',
    component: ViewStudentDetailsComponent,
  },
  {
    path: 'viewDetails/:_id',
    component: ViewStudentDetailsComponent,
  },
  {
    path: 'createExam',
    component: CreateExamComponent,
  },
  {
    path: 'teacher/createExam',
    component: CreateExamComponent,
  },
  {
    path: 'viewExam',
    component: ViewExamComponent,
  },
  {
    path: 'viewExam/:_id',
    component: ViewSingleExamDetailComponent,
  },
  {
    path:'verifyStudentData',
    component:VerifyStudentDataComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
