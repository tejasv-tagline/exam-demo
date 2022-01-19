import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss'],
})
export class CreateExamComponent implements OnInit {
  myExamForm: FormGroup;
  public questionArray = [
    {
      question: '',
      answer: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
    },
  ];
  public questionsObj: any = {};
  public optionsList: any = [];
  public questions = [
    {
      // question: '',
      // answer: '',
      // options: [
      //   {
      //     ans1: '',
      //     ans2: '',
      //     ans3: '',
      //     ans4: '',
      //   },
      // ],
    },
  ];
  public optionList: any = [];

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.myExamForm = this.fb.group({
      subjectName: [''],
      questions: [['']],
      question: [''],
      answer: [''],
      option1: [''],
      option2: [''],
      option3: [''],
      option4: [''],
      notes: [['10pm']],
    });
  }

  ngOnInit(): void {}
  public addQuestion() {
    this.questionsObj['question'] = this.myExamForm.value.question;
    this.questionsObj['answer'] = this.myExamForm.value.answer;
    this.optionList.push(
      this.myExamForm.value.option1,
      this.myExamForm.value.option2,
      this.myExamForm.value.option3,
      this.myExamForm.value.option4
    );
    console.log(
      'this.optionList------------------------------- :>> ',
      this.optionList
    );

    this.questionsObj['options'] = this.optionsList;

    console.log('this.qu ---------:>> ', this.questionsObj);
    this.questionArray.push(this.myExamForm.value);
    console.log('this.myExamForm.value :>> ', this.myExamForm.value);
  }

  public onSubmit() {
    this.apiService.createExam(this.myExamForm.value).subscribe({
      next: (res) => {
        res;
      },
    });
  }
  get fControl() {
    return this.myExamForm.controls;
  }
}
