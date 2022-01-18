import { Component, OnInit } from '@angular/core';
import { ViewAllExam } from 'src/app/interface/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss'],
})
export class ViewExamComponent implements OnInit {

  public examName!: string;
  public email!: string;
  public id!:string;
  public v!:string;
  public notes=[];
  public allExamList:ViewAllExam[]=[]

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.viewExam().subscribe({
      next: (res) => {
        console.log('Exam Details -----:>> ', res);
        console.log('res.data[0]. :>> ', res.data);
        this.allExamList=res.data;
        console.log('this.allExamList :>> ', this.allExamList);
        // this.examName = res.data.subjectName;
        // this.email = res.data.email;
        // this.id = res.data._id;
        // this.v = res.data._v;
        // this.notes = res.data.notes;
      },
    });
  }
}
