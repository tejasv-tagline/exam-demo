import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ProfileComponent } from './profile/profile.component';

import { UsersModule } from '../users/users.module';
import { ExamListComponent } from './exam-list/exam-list.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ExamListComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,

    UsersModule
  ]
})
export class StudentModule { }
