import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { viewExamData, ViewExamPaperResponse } from 'src/app/interface/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-exam-paper',
  templateUrl: './exam-paper.component.html',
  styleUrls: ['./exam-paper.component.scss'],
})
export class ExamPaperComponent implements OnInit {
  public capturedId!: string;
  public questionList: viewExamData[] = [];
  public index: number = 0;
  public indexArray: number[] = [];
  public isExamShowed: boolean = false;
  public examForm!: FormGroup;
  public myExam!: FormGroup;
  public response: ViewExamPaperResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private toaster: ToastrService,
    private fb: FormBuilder
  ) {
    this.response = this.activatedRoute.snapshot.data['examPaperResolver'];
    // console.log('this.response :>> ', this.response);
    this.capturedId = this.activatedRoute.snapshot.params['_id'];

    //  console.log('this.capturedId :>> ', this.capturedId);

    this.examForm = this.fb.group({
      question: new FormArray([]),
      answer: new FormArray([]),
    });
    // this.myExam = this.fb.group({
    //   question: '',
    //   answer: '',
    // });
  }

  ngOnInit(): void {
    if (this.response.statusCode == 200) {
      this.isExamShowed = true;
      this.toaster.success(this.response.message);
      this.questionList = this.response.data;
      // console.log('this.questionList :>> ', this.questionList);
    }

    // this.apiService.viewExamById(this.capturedId).subscribe({
    //   next: (res: ViewExamPaperResponse) => {
    //     // console.log('res :>> ', res);
    //     if (res.statusCode == 200) {
    //       this.isExamShowed = true;
    //       this.toaster.success(res.message);
    //       // console.log('res.data :>> ', res.data);
    //       this.questionList = res.data;
    //       // console.log('this.questionList :>> ', this.questionList);
    //     } else {
    //       this.toaster.error(res.message);
    //     }
    //   },
    // });
  }

  // public onSubmit(): void {
  //         this.apiService.submitExam(this.capturedId,this.examForm.value).subscribe({
  //       next:(res)=>{
  //         console.log('res :>> ', res);
  //       }
  //     })
  // }
  public onSubmit() {
    // console.log('this.myExam :>> ', this.examForm.value);
  }
  public submitExamStudent(): void {
    // console.log('this.myExam.value :>> ', this.myExam.value);
    // this.apiService.submitExam(this.capturedId,this.myExam.value).subscribe({
    //   next:(res)=>{
    //     console.log('res :>> ', res);
    //   }
    // })
  }
}
