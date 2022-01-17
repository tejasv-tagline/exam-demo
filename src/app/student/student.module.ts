import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { TeacherRoutingModule } from '../teacher/teacher-routing.module';
import { TeacherModule } from '../teacher/teacher.module';
import { UsersModule } from '../users/users.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    TeacherModule,
    UsersModule
  ]
})
export class StudentModule { }
