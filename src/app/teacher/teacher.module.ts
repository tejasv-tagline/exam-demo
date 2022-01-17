import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { StudentDataListComponent } from './student-data-list/student-data-list.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';
import { UsersModule } from '../users/users.module';


@NgModule({
  declarations: [
    StudentDataListComponent,
    ViewStudentDetailsComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    UsersModule,
  ],
  exports:[StudentDataListComponent]
})
export class TeacherModule { }
