import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  public myForm!: FormGroup;
  public token!: string | void;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private toaster: ToastrService,
    private spinner:NgxSpinnerService
  ) {
    this.myForm = this.fb.group({
      Password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
        ],
      ],
      ConfirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.apiService.newPasswordTokenCheck().subscribe({
      next: (res) => {
        if (res.statusCode == 200) {
          this.token = localStorage.getItem('token');
        }
      },
    });
  }

  get fControl() {
    return this.myForm.controls;
  }

  public onSubmit(): void {
    this.spinner.show();
    console.log('this.myForm.value :>> ', this.myForm.value);
    this.apiService
      .changeStudentPassword(this.token, this.myForm.value)
      .subscribe({
        next: (res) => {
          this.spinner.hide();
          if (res.statusCode == 200) {
            this.toaster.success(res.message);
            console.log('res :>> ', res);
          } else {
            this.toaster.error(res.message);
          }
        },
        error: (err) => {
          this.toaster.error(err.message);
          this.spinner.hide();
        },
      });
  }
}
