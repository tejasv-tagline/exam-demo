import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private apiService: ApiService,private toaster:ToastrService) {
    this.token = localStorage.getItem('token');
    this.myForm = this.fb.group({
      Password: ['',[Validators.required]],
      ConfirmPassword: ['',[Validators.required]]
    });
  }

  ngOnInit(): void {}

  public onSubmit(): void {
    console.log('this.myForm.value :>> ', this.myForm.value);
    this.apiService
      .changeStudentPassword(this.token, this.myForm.value)
      .subscribe({
        next: (res) => {
          if(res.statusCode==200){

            this.toaster.success(res.message);
            console.log('res :>> ', res);
          }
          else{
            this.toaster.error(res.message)
          }
        },
        error:(err)=>{
          this.toaster.error(err.message);

        }
      });
  }
}
