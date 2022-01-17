import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { StudentDataListComponent } from './student-data-list/student-data-list.component';


@NgModule({
  declarations: [
    StudentDataListComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  exports:[StudentDataListComponent]
})
export class TeacherModule { }
