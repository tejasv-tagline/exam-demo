import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileData, ProfileResponse } from 'src/app/interface/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  public profile: ProfileData;
  public response: ProfileResponse;
  public myForm!: FormGroup;


  constructor( private apiService: ApiService, private toaster: ToastrService,private activatedRoute: ActivatedRoute,private router: Router,private fb: FormBuilder) {
    this.response = this.activatedRoute.snapshot.data['profileResolver'];
    
    this.myForm = this.fb.group({
      name: '',
    });
  }

  ngOnInit(): void {
    if (this.response.statusCode == 200) {
      this.toaster.success(this.response.message);
      this.profile = this.response.data;
    } else {
      this.toaster.error(this.response.message);
    }
  }
  public logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  public updateProfile() {
    console.log('this.myForm.value :>> ', this.myForm.value);
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
