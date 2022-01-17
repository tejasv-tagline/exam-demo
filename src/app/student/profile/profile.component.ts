import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public token:any;
  constructor(private apiService:ApiService) { }
  
  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.apiService.getStudentsData()
    .subscribe({
      next:(data)=>console.log('data :>> ', data)
    }
    );
  }

}
