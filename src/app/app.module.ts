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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './headers/header/header.component';
import { JwtInterceptor } from './interceptor/jwt.interceptor';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    TeacherModule,
    StudentModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
