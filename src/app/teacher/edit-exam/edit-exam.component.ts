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
  public staticExamName: string = 'GPSC preliminary exam';
  public staticNotes = [
    'Exam is canceled',
    'Exam is going to be taken on 25th january',
  ];

  constructor(
    private apiService: ApiService,
    private toaster: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.passId = this.route.snapshot.params['id'];
    this.showExamName = localStorage.getItem('examName');
    console.log('this.showExamName :>> ', this.showExamName);
    this.viewDetails();
  }
  get fControl() {
    return this.myForm.controls;
  }
  public viewDetails(): void {
    this.apiService.viewSingleExam(this.passId).subscribe({
      next: (res) => {
        this.isPageLoaded = true;
        if (res.statusCode == 200) {
          console.log('examName :>> ', this.showExamName);
          this.toaster.success(res.message);
          this.allQuestionBunch = res.data.questions;
          // console.log('this.allQuestionBunch :>> ', this.allQuestionBunch);
          // console.log('Response :>> ', res);
          // for (let i = 0; i < res.data.questions.length; i++) {
          //   this.questionNumbers.push(i);
          // }
        }
      },
    });
  }

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
