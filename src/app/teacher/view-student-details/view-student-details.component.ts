import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-student-details',
  templateUrl: './view-student-details.component.html',
  styleUrls: ['./view-student-details.component.scss']
})
export class ViewStudentDetailsComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    
    // this.apiService.getDetails(id)
    // .subscribe({
    //   next:(data)=>{console.log('data :>> ', data);}
    // })
  }

  
}
