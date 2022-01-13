import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-student-data-list',
  templateUrl: './student-data-list.component.html',
  styleUrls: ['./student-data-list.component.scss']
})
export class StudentDataListComponent implements OnInit {

  constructor(private apiservice:ApiService) {
    const token = localStorage.getItem('token');
    console.log('token :>> ', token);
   }

  ngOnInit(): void {

  }

  getStudentData(){
    // this.apiservice.getStudentsData(this.localstorage.getItem('token'));
  }
}
