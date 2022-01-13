import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public myForm!: FormGroup;
  public roles = ['Student', 'Teacher', 'User'];
  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.myForm = this.fb.group({
      name: '',
      email: '',
      password: '',
      role: '',
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
      next: (res) => { console.log('post res :>> ', res); 
    // if(res.server)
  }
    })
    
  }
}
