import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-exam-paper',
  templateUrl: './exam-paper.component.html',
  styleUrls: ['./exam-paper.component.scss']
})
export class ExamPaperComponent implements OnInit {

  public capturedId:any;

  constructor(private route:ActivatedRoute,private apiService:ApiService) { 
   this.capturedId=this.route.snapshot.params['_id'];
   console.log('this.capturedId :>> ', this.capturedId);
  }

  ngOnInit(): void {
    this.apiService.viewExamById(this.capturedId)
    .subscribe({
      next:(res)=>{
        console.log('res :>> ', res);
      }
    })
  }

}
