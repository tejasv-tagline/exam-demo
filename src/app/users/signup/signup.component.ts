import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public myForm!: FormGroup;
  public isSignedUp: boolean = false;
  public isSignedUpFailed: boolean = false;
  public roles = ['Student', 'Teacher', 'User'];
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      role: ['',Validators.required],
    });
  }

  ngOnInit(): void {
    // this.apiService.getStudentData().subscribe({
    //   next: (res: any) => {
    //     console.log('res :>> ', res);
    //   },
    //   error: (err: any) => {
    //     console.log(' getAddress error :>> ', err);
    //   },
    // });
  }
  public navigateLogin(){
    this.router.navigate(['/login'])
  }
  get fControl(){
    return this.myForm.controls;
  }
  public onSubmit(): void {
    // console.log('this.myForm :>> ', this.myForm.value);
    // console.log('this.myForm.value.name :>> ', this.myForm.value.name);
    // const data = {
    //   name: this.myForm.value.name,
    //   email: 'herdihulmu@nedoz.com',
    //   password: '123456789',
    //   role: 'student',
    // };

    this.apiService.setUsername(this.myForm.value).subscribe({
      next: (res) => {
        console.log('post res :>> ', res);
        this.router.navigate(['login']);
        // if(res.server)
      },
      error: (err) => {
        this.isSignedUpFailed = true;
        this.isSignedUpFailed = err.message;
      },
    });
  }
}
