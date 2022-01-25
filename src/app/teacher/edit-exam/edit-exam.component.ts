import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AllQuestionBunch } from 'src/app/interface/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-exam',
  templateUrl: './edit-exam.component.html',
  styleUrls: ['./edit-exam.component.scss'],
})
export class EditExamComponent implements OnInit {
  public passId!: string;
  public allQuestionBunch: AllQuestionBunch[] = [];
  // public questionNumbers: number[] = [];
  public options = ['A', 'B', 'C', 'D'];
  public showExamName!: string | null | void;
  public isPageLoaded: boolean = false;
  public myForm!: FormGroup;
  public staticUpdateObject = {};
  public staticExamName=localStorage.getItem('examName');
  public staticNotes = [
    'Exam is canceled',
    'Exam is going to be taken on 25th january',
  ];
  public isLoading:boolean=true;
  public response=this.activatedRoute.snapshot.data['viewSingleExamResolver']

  constructor(
    private apiService: ApiService,
    private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.passId = this.activatedRoute.snapshot.params['_id'];
    
    // this.viewDetails();
    if(this.response.statusCode==200){
      this.isPageLoaded=true;
      this.showExamName = localStorage.getItem('examName');
      this.toaster.success(this.response.message);
      this.allQuestionBunch=this.response.data.questions;
    }
    else{
      this.toaster.error(this.response.message)
    }
    
  }
  get fControl() {
    return this.myForm.controls;
  }
  // public viewDetails(): void {
  //   this.apiService.viewSingleExam(this.passId).subscribe({
  //     next: (res) => {
  //       this.isPageLoaded = true;
  //       if (res.statusCode == 200) {
  //         this.isLoading=false;
  //         this.showExamName = localStorage.getItem('examName');
  //         console.log('examName :>> ', this.showExamName);
  //         this.toaster.success(res.message);
  //         this.allQuestionBunch = res.data.questions;
  //       }
  //     },
  //   });
  // }

  public editExam(): void {
    this.staticUpdateObject = {
      subjectName: this.staticExamName,
      questions: this.allQuestionBunch,
      notes: this.staticNotes,
    };

    this.apiService
      .editTeacherExam(this.passId, this.staticUpdateObject)
      .subscribe({
        next: (res) => {
          if (res.statusCode == 200) {
            this.toaster.success(res.message);
            this.router.navigate(['viewExam']);
          }
          console.log('editTeacherExam res :>> ', res);
        },
      });
  }
}
