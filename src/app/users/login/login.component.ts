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
  public teacherName: any;
  public teacherEmail: any;

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
      password: ['Tejash@123', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  public navigateRegister() {
    this.router.navigate(['/signup']);
  }
  public onLogin(): void {
    this.apiService.getUserData(this.myLoginForm.value).subscribe({
      next: (res: LoginDataResponse) => {
        if (res) {
          // console.log('this.myLoginForm.value :>> ', this.myLoginForm.value);
          // console.log('Login response :>> ', res);

          this.apiService.isLoggedOut = true;
          if (res?.data.role == 'student') {
            // localStorage.removeItem('token');
            this.token = localStorage.setItem('token', res.data.token);
            // console.log('res.data.token :>> ', res.data.token);
            this.toaster.success(res.message);
            this.router.navigate(['student']);
          } else {
            this.token = localStorage.setItem('token', res.data.token);
            // this.teacherName=res.data.name;
            // this.teacherEmail=res.data.email;
            // this.router.navigate(['teacher/'+this.teacherName+'/'+this.teacherEmail]);
            this.teacherName=localStorage.setItem('teacherName',res.data.name);
            this.teacherEmail=localStorage.setItem('teacherEmail',res.data.email);
            this.router.navigate(['teacher'])
            this.toaster.success(res.message);
            console.log('this.teacherName :>> ', this.teacherName);
          }
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
