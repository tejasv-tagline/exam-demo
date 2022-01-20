import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentHomeComponent } from './student-home/student-home.component';

const routes: Routes = [
  {
    path: '',
    component: StudentHomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'viewExamList',
    component: ExamListComponent,
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
    path:'**',
    redirectTo:'',
  }
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
