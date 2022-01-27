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
  public allQuestionBunch: AllQuestionBunch[] = [];
  // public questionNumbers: number[] = [];
  public options = ['A', 'B', 'C', 'D'];
  public showExamName: string | null = '';
  public isPageLoaded: boolean = false;
  public response = this.activatedRoute.snapshot.data['viewSingleExamResolver'];
  // public isLoading:boolean=true;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toaster: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.passId = this.route.snapshot.params['_id'];
    this.showExamName = localStorage.getItem('examName');
    this.viewDetails();
  }

  public viewDetails(): void {
    // this.apiService.viewSingleExam(this.passId).subscribe({
    //   next: (res) => {
    //     this.isPageLoaded=true;
    //     if (res.statusCode == 200) {
    //       this.toaster.success(res.message);
    //       this.allQuestionBunch = res.data.questions;
    //       console.log('this.allQuestionBunch :>> ', this.allQuestionBunch);
    //     }
    //   },
    // });
    if (this.response.statusCode == 200) {
      // this.isLoading=false;

      this.allQuestionBunch = this.response.data.questions;
      this.isPageLoaded = true;
      console.log('Answer is here---->>', this.allQuestionBunch);
      this.toaster.success(this.response.message);
    } else {
      this.toaster.error(this.response.message);
    }
  }

  // load() : void {
  //   this.isLoading = true;
  //   setTimeout( () => this.isLoading = false, 2000 );
  // }

  // async wait(ms: number): Promise<void> {
  // 	return new Promise<void>( resolve => setTimeout( resolve, ms) );
  // }

  // start() {
  //   this.isLoading = true;
  // 	this.wait(2000).then( () => this.isLoading = false );
  // }
}
