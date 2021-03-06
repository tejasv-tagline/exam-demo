import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../AuthGuard/auth.guard';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { EditExamComponent } from './edit-exam/edit-exam.component';
import { ExamListResolver } from './Resolver/exam-list.resolver';
import { StudentListResolver } from './Resolver/student-list.resolver';
import { VerifiedStudentsResolver } from './Resolver/verified-students.resolver';
import { ViewSingleExamResolver } from './Resolver/view-single-exam.resolver';
import { ViewSingleStudentResolver } from './Resolver/view-single-student.resolver';
import { StudentDataListComponent } from './student-data-list/student-data-list.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { TestingTeacherComponent } from './testing-teacher/testing-teacher.component';
import { VerifyStudentDataComponent } from './verify-student-data/verify-student-data.component';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { ViewSingleExamDetailComponent } from './view-single-exam-detail/view-single-exam-detail.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherHomeComponent,
  },
  {
    path: 'studentDataList',
    canDeactivate: [AuthGuard],
    component: StudentDataListComponent,
    resolve: { studentList: StudentListResolver },
  },
  {
    path: 'viewDetails/:_id',
    component: ViewStudentDetailsComponent,
    resolve: {
      viewSingleExamResolver: ViewSingleExamResolver,
      viewSingleStudentResolver: ViewSingleStudentResolver,
    },
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
    resolve: { examList: ExamListResolver },
  },
  {
    path: 'viewExam/:_id',
    component: ViewSingleExamDetailComponent,
    resolve: { viewSingleExamResolver: ViewSingleExamResolver },
  },
  {
    path: 'verifyStudentData',
    component: VerifyStudentDataComponent,
    resolve: { verifiedStudentsResolver: VerifiedStudentsResolver },
  },
  {
    path: 'editExam/:_id',
    component: EditExamComponent,
    resolve: { viewSingleExamResolver: ViewSingleExamResolver },
  },
  {
    path: 'testing',
    // resolve:{viewSingleExamResolver:ViewSingleExamResolver},
    component: TestingTeacherComponent,
  },
  {
    path: 'testing/:_id',
    resolve:{viewSingleExamResolver:ViewSingleExamResolver},
    component: TestingTeacherComponent,
  },
  // {
  //   path:'changePassword',
  //   loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
  // },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
