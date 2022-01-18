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
          console.log('res :>> ', res);
          console.log('res.data.questions :>> ', res.data.questions);
          this.allQuestionBunch=res.data.questions;
          console.log('this.allQuestionBunch :>> ', this.allQuestionBunch);
        }
      },
    });
  }
}
