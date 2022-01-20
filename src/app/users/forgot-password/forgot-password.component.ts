import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SendData } from 'src/app/interface/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  public imagePath: string =
    'https://www.zenscale.in/assets/frontpage/images/newtheme/forgot_password.svg';
  public emailInput!: string;
  // public sendData;
  public myForm!: FormGroup;


  constructor(
    private apiService: ApiService,
    private toaster: ToastrService,
    private router: Router,
    private fb:FormBuilder
  ) {
    this.myForm=this.fb.group({
      email:['',Validators.required]
    })
  }

  ngOnInit(): void {
    // console.log('this.sendData :>> ', this.sendData);
  }

  get fControl(){
    return this.myForm.controls;
  }

  public sendMail():void {
    // console.log('this.sendData :>> ', this.sendData);
    console.log('this.myFrom.value :>> ', this.myForm.value);
    this.apiService.forgotPassword(this.myForm.value).subscribe({
      next: (res) => {
        console.log('res :>> ', res);
        if (res.statusCode == 200) {
          this.toaster.success(res.message);
        } else {
          this.toaster.error(res.message);
        }
      },
      error: (err) => {
        this.toaster.error(err);
      },
    });
  }
}
