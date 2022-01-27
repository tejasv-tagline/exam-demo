import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {
  public myForm!: FormGroup;
  public token!: string | void;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private toaster: ToastrService
  ) {
    this.myForm = this.fb.group({
      oldPassword: ['',[Validators.required]],
      Password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(30),]],
      ConfirmPassword: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(30),],],
    });
  }

  ngOnInit(): void {

  }

  get fControl() {
    return this.myForm.controls;
  }

  public onSubmit(): void {
    console.log('this.myForm.value :>> ', this.myForm.value);
    this.apiService.newPassword(this.myForm.value).subscribe({
      next:(res)=>{
        if(res.statusCode==200){
          this.toaster.success(res.message);
          console.log('res :>> ', res);
        }
      }
    })
  }

}
