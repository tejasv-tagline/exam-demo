import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDataListComponent } from './student-data-list/student-data-list.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';

const routes: Routes = [
  {
    path: '',
    component: StudentDataListComponent,
  },
  {
    path: 'teacher',
    component: StudentDataListComponent,
  },
  {
    path: 'viewDetails',
    component: ViewStudentDetailsComponent,
  },
  {
    path:'viewDetails/:id',
    component:StudentDataListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
