import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  public showExamName: string | null = '';
  public isPageLoaded: boolean = false;
  public myForm!: FormGroup;
  public staticUpdateObject={};
  public staticExamName:string='GPSC preliminary exam';
  public staticNotes=[['Exam is canceled','Exam is going to be taken on 25th january']]


  constructor(
    private apiService: ApiService,
    private toaster: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.passId = this.route.snapshot.params['id'];
    this.showExamName = localStorage.getItem('examName');
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
          this.toaster.success(res.message);
          this.allQuestionBunch = res.data.questions;
          console.log('this.allQuestionBunch :>> ', this.allQuestionBunch);
          // for (let i = 0; i < res.data.questions.length; i++) {
          //   this.questionNumbers.push(i);
          // }
        }
      },
    });
  }

  public editExam(): void {
    const data = {
      subjectName: 'Science for 16 std',
      questions: [
        {
          question: 'question1',
          answer: 'ans1',
          options: ['ans1', 'ans2', 'ans3', 'ans4'],
        },
        {
          question: 'question2',
          answer: 'ans2',
          options: ['ans1', 'ans2', 'ans3', 'ans4'],
        },
        {
          question: 'question3',
          answer: 'ans3',
          options: ['ans1', 'ans2', 'ans3', 'ans4'],
        },
        {
          question: 'question4',
          answer: 'ans4',
          options: ['ans1', 'ans2', 'ans3', 'ans4'],
        },
        {
          question: 'question5',
          answer: 'ans1',
          options: ['ans1', 'ans2', 'ans3', 'ans4'],
        },
        {
          question: 'question6',
          answer: 'ans2',
          options: ['ans1', 'ans2', 'ans3', 'ans4'],
        },
        {
          question: 'question7',
          answer: 'ans3',
          options: ['ans1', 'ans2', 'ans3', 'ans4'],
        },
        {
          question: 'question8',
          answer: 'ans4',
          options: ['ans1', 'ans2', 'ans3', 'ans4'],
        },
        {
          question: 'question9',
          answer: 'ans1',
          options: ['ans1', 'ans2', 'ans3', 'ans4'],
        },
        {
          question: 'question10',
          answer: 'ans2',
          options: ['ans1', 'ans2', 'ans3', 'ans4'],
        },
        {
          question: 'question11',
          answer: 'ans3',
          options: ['ans1', 'ans2', 'ans3', 'ans4'],
        },
        {
          question: 'question12',
          answer: 'ans4',
          options: ['ans1', 'ans2', 'ans3', 'ans4'],
        },
        {
          question: 'question13',
          answer: 'ans1',
          options: ['ans1', 'ans2', 'ans3', 'ans4'],
        },
        {
          question: 'question14',
          answer: 'ans2',
          options: ['ans1', 'ans2', 'ans3', 'ans4'],
        },
        {
          question: 'question15',
          answer: 'ans3',
          options: ['ans1', 'ans2', 'ans3', 'ans4'],
        },
      ],
      notes: ['10mins exam', 'start time 10am'],
    };

    this.staticUpdateObject={
      "subjectName":this.staticExamName,
      "questions":this.allQuestionBunch,
      "notes":this.staticNotes
    }

    this.apiService.editTeacherExam(this.passId, this.staticUpdateObject).subscribe({
      next: (res) => {
        console.log('editTeacherExam res :>> ', res);
      }
    });
  }
}
