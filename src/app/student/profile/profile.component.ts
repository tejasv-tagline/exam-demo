import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileResponse } from 'src/app/interface/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public token: any;

  public profileName: string = '';
  public profileEmail: string = '';
  public profileRole: string = '';
  public profileId: string = '';
  public response = this.activatedRoute.snapshot.data['profileResolver'];
  public studentName!: string;
  public updateProfileStudent = {
    name: '',
  };
  public myForm!: FormGroup;
  public defaultName:string|null;

  constructor(
    private apiService: ApiService,
    private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.myForm=this.fb.group({
      name:'',
    })
  }

  ngOnInit(): void {
    this.defaultName=localStorage.getItem('studentName')
    if (this.response.statusCode == 200) {
      this.toaster.success(this.response.message);
      this.profileName = this.response.data.name;
      this.profileEmail = this.response.data.email;
      this.profileRole = this.response.data.role;
      this.profileId = this.response.data._id;
      this.studentName = this.profileName;
    } else {
      this.toaster.error(this.response.message);
    }

    // this.apiService.getProfile().subscribe({
    //   next: (res: ProfileResponse) => {

    //     console.log('res :>> ', res);
    //     if (res.statusCode == 200) {
    //       this.toaster.success(res.message);
    //       this.profileName = res.data.name;
    //       this.profileEmail = res.data.email;
    //       this.profileRole = res.data.role;
    //       this.profileId = res.data._id;
    //     } else {
    //       this.toaster.error(res.message);
    //     }
    //   },
    //   error: (err) => {
    //     console.log('err :>> ', err);
    //   },
    // });
  }
  public logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  public updateProfile() {
    console.log('this.myForm.value :>> ', this.myForm.value);
    // this.updateProfileStudent.name = this.studentName;
    this.apiService.updateStudentProfile(this.myForm.value).subscribe({
      next: (res) => {
        console.log('res :>> ', res);
        if (res.statusCode == 200) {
          this.toaster.success('Relogin to check updated details', res.message);
          this.logout();
        }
      },
    });
  }
}
