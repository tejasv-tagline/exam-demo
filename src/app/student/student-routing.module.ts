import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamListResolver } from '../teacher/Resolver/exam-list.resolver';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewAllExamResolver } from './Student Resolver/view-all-exam.resolver';
import { ProfileResolver } from './Student Resolver/profile.resolver';
import { StudentHomeComponent } from './student-home/student-home.component';

const routes: Routes = [
  {
    path: '',
    component: StudentHomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    resolve: { profileResolver: ProfileResolver },
  },
  {
    path: 'viewExamList',
    component: ExamListComponent,
    resolve: { viewAllExamResolver: ViewAllExamResolver },
  },
  // {
  //   path: 'examPaper',
  //   component: ExamPaperComponent,
  // },
  {
    path: 'examPaper/:_id',
    component: ExamPaperComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
  // {
  //   path:'examPaper/:id',
  //   component:ExamPaperComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
