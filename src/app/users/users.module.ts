import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TestingFormComponent } from './testing-form/testing-form.component';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    TestingFormComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[ChangePasswordComponent,LoginComponent]
})
export class UsersModule { }
