import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private toaster: ToastrService,
    private router: Router
  ) {
    this.myLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  public onLogin(): void {
    this.apiService.getUserData(this.myLoginForm.value).subscribe({
      next: (res) => {
        if(res.data.role=='student'){
          this.toaster.success(res.message);
          this.router.navigate(['student']);
        }
        else{
          this.router.navigate(['teacher'])
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
