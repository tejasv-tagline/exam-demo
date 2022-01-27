import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginDataResponse, LoginData } from 'src/app/interface/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public myLoginForm!: FormGroup;
  public isErrorMessage: boolean = false;
  public isLoginDone: boolean = false;
  public token: any = '';
  public isLoading: boolean = false;
  public teacherName!: void;
  public teacherEmail!: void;
  public studentName!: void;
  public studentEmail!: void;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private toaster: ToastrService,
    private router: Router
  ) {
    this.myLoginForm = this.fb.group({
      email: [
        'tejasvteacher.tagline@gmail.com',
        [Validators.required, Validators.email],
      ],
      password: ['123456', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
  }

  public navigateRegister() {
    this.router.navigate(['/signup']);
  }
  public onLogin(): void {
    this.apiService.getUserData(this.myLoginForm.value).subscribe({
      next: (res: LoginDataResponse) => {
        if (res.statusCode == 200) {
          this.toaster.success(res.message);
          this.apiService.isLoggedOut = true;
          if (res?.data.role == 'student') {
            this.token = localStorage.setItem('token', res.data.token);
            this.studentName = localStorage.setItem(
              'studentName',
              res.data.name
            );
            this.studentEmail = localStorage.setItem(
              'studentEmail',
              res.data.email
            );
            this.router.navigate(['student']);
          } else {
            this.token = localStorage.setItem('token', res.data.token);
            this.teacherName = localStorage.setItem(
              'teacherName',
              res.data.name
            );
            this.teacherEmail = localStorage.setItem(
              'teacherEmail',
              res.data.email
            );
            this.router.navigate(['teacher']);
          }
        }else{
          this.toaster.error(res.message);
        }
      },
      error: (err) => {
        this.toaster.error(err.error.message);
      },
    });
  }
  get fControl() {
    return this.myLoginForm.controls;
  }
}
