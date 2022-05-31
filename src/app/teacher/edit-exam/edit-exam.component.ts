import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  public showExamName!: string | null;
  public isPageLoaded: boolean = false;
  public myForm!: FormGroup;
  public staticUpdateObject = {};
  public staticExamName = localStorage.getItem('examName');
  public staticNotes = [
    'Exam is canceled',
    'Exam is going to be taken on 25th january',
  ];
  public isLoading: boolean = true;
  public response = this.activatedRoute.snapshot.data['viewSingleExamResolver'];

  constructor(
    private apiService: ApiService,
    private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.passId = this.activatedRoute.snapshot.params['_id'];
    this.myForm = this.fb.group({
      // subjectName: [''],
      questions: this.fb.array([]),
      // notes: this.fb.array([new FormControl('null', Validators.required)]),
    });

    // this.viewDetails();
    if (this.response.statusCode == 200) {
      console.log(
        'this.response.data.questions :>> ',
        this.response.data.questions
      );
      this.myForm.patchValue(this.response.data.questions)
      // console.log('this.response :>> ', this.response);
      // console.log('this.response.data :>> ', this.response.data);
      this.isPageLoaded = true;
      this.showExamName = localStorage.getItem('examName');
      this.toaster.success(this.response.message);
      this.allQuestionBunch = this.response.data.questions;
    } else {
      this.toaster.error(this.response.message);
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
          // console.log('editTeacherExam res :>> ', res);
        },
      });
  }
}
