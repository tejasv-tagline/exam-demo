import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.myLoginForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  onLogin() {
    console.log('myLoginForm.value :>> ', this.myLoginForm.value);
    this.apiService.getUserData(this.myLoginForm.value).subscribe({
      next: (res) => {
        // console.log('res :>> ', res.message);.
        this.isLoginDone=true;
        this.isLoginDone=res.message
        // alert('Login Successfull');
      },
      error: (err) => {
        this.isErrorMessage = true;
        this.isErrorMessage = err.error.message;
      },
    });
  }
}
