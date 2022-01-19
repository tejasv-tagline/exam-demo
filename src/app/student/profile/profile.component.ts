import { Component, OnInit } from '@angular/core';
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

  profileName: string = '';
  profileEmail: string = '';
  profileRole: string = '';
  profileId: string = '';

  constructor(private apiService: ApiService, private toaster: ToastrService) {}

  ngOnInit(): void {
    this.apiService.getProfile().subscribe({
      next: (res: ProfileResponse) => {
        // setTimeout(() => {
        console.log('res :>> ', res);
        if (res.statusCode == 200) {
          this.toaster.success(res.message);
          this.profileName = res.data.name;
          this.profileEmail = res.data.email;
          this.profileRole = res.data.role;
          this.profileId = res.data._id;
        } else {
          this.toaster.error(res.message);
        }
        // }, 1000);
      },
      error: (err) => {
        console.log('err :>> ', err);
      },
    });
  }
}
