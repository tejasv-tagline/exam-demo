import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AllQuestionBunch } from 'src/app/interface/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-single-exam-detail',
  templateUrl: './view-single-exam-detail.component.html',
  styleUrls: ['./view-single-exam-detail.component.scss'],
})
export class ViewSingleExamDetailComponent implements OnInit {
  public passId!: string;
  public allQuestionBunch:AllQuestionBunch[]=[];
  public questionNumbers:number[]=[]
  // public qn!:any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.passId = this.route.snapshot.params['_id'];
    this.viewDetails();
  }

  public viewDetails(): void {
    this.apiService.viewSingleExam(this.passId).subscribe({
      next: (res) => {
        if (res.statusCode == 200) {
          this.toaster.success(res.message);
          // console.log('res :>> ', res);
          // console.log('res.data.questions :>> ', res.data.questions);
          this.allQuestionBunch=res.data.questions;
          // console.log('this.allQuestionBunch :>> ', this.allQuestionBunch);
          // console.log('res.data.length :>> ', res.data.questions.length);
          for(let i=0;i<res.data.questions.length;i++){
            // console.log(typeof i);
              this.questionNumbers.push(i);
          }
          // this.qn=this.questionNumbers.forEach(e=>{console.log('e :>> ', e);})
          // console.log('this.qn :>> ', this.qn);
          // console.log('this.questionNumbers :>> ', this.questionNumbers);
          console.log('res.data.questions:>> ', res.data.questions);
        }
      },
    });
  }
}
