import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRoutingModule } from './student/student-routing.module';
import { StudentModule } from './student/student.module';
import { TeacherRoutingModule } from './teacher/teacher-routing.module';
import { TeacherModule } from './teacher/teacher.module';
import { UsersRoutingModule } from './users/users-routing.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    TeacherModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
