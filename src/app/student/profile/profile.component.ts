import { Component, OnInit } from '@angular/core';
import { StudentProfile } from 'src/app/interface/common';
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

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    
    this.apiService.getProfile().subscribe({
      next: (res: any) => {
        // console.log('res :>> ', res);
        setTimeout(() => {
          this.profileName = res.data.name;
          this.profileEmail=res.data.email;
          this.profileRole=res.data.role;
          this.profileId=res.data._id;
        }, 100);
      },
      error: (err) => {
        console.log('err :>> ', err);
      },
    });
  }
}
