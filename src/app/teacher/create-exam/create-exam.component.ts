import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { toUnicode } from 'punycode';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss'],
})
export class CreateExamComponent implements OnInit {
  public myForm!: FormGroup;
  public address!: FormGroup;
  public mobile: FormArray;
  public questions: FormArray;
  public notes: FormArray;
  // public options: FormArray;
  public options: FormGroup;
  public extraArray = [];
  public optionsAll = [];
  public isformFormatted: boolean = false;
  public isCreateExamHide: boolean = false;
  public formLength: number;
  public counter: number = 0;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private toaster: ToastrService
  ) {
    this.myForm = this.fb.group({
      subjectName: ['null', [Validators.required]],
      questions: this.fb.array([]),
      notes: this.fb.array([new FormControl('null', Validators.required)]),
    });
    // this.noteControl.valueChanges.subscribe((value) => console.log('value :>> ', value))
    console.log('this.myForm :>> ', this.myForm.value);
  }

  ngOnInit(): void {
    // this.addNote();
    this.addQuestion();
  }

  get noteControl(): FormArray {
    return this.myForm.get('notes') as FormArray;
  }

  get questionArray(): FormArray {
    return this.myForm.get('questions') as FormArray;
  }

  public addNote() {
    // console.log('this.formMobile :>> ', this.myForm);
    this.noteControl.push(new FormControl(null, Validators.required));
  }

  // getNoteFormGroup() {
  //   return this.fb.group({
  //     note: [null]
  //   })
  // }

  get optionControl() {
    return this.myForm.get('options') as FormArray;
  }

  get getOptionArray(): FormArray {
    return this.formMobile.get('options') as FormArray;
  }
  // public addOptions(index) {
  //   this.getOptionArray.push(new FormControl(null));
  // }

  public defauldControls() {
    return this.fb.group({
      question: ['null', [Validators.required]],
      answer: ['null', [Validators.required]],
      options: this.fb.group({
        option1: ['null', [Validators.required]],
        option2: ['null', [Validators.required]],
        option3: ['null', [Validators.required]],
        option4: ['null', [Validators.required]],
        // new FormControl(null),
        // new FormControl(null),
        // new FormControl(null),
        // new FormControl(null),
      }),
    });
  }

  get formMobile() {
    return this.myForm.get('questions') as FormArray;
  }

  // public allOptions(){
  //   return this.formMobile.get('options')['controls'] as FormArray;
  // }

  public addQuestion() {
    this.generateCounter('add');
    this.formLength = this.myForm.value.questions.length;
    // console.log('this.formLength :>> ', this.formLength);
    if (this.formLength < 15) {
      console.log('this.formLength :>> ', this.formLength);
      this.formMobile.push(this.defauldControls());
    } else {
      window.alert('You can add maximum 15 questions');
    }
    if (this.formLength > 13) {
      this.isformFormatted = true;
    }
  }
  public generateCounter(param: string): void {
    if (this.counter < 15 && param === 'add') {
      // if (param === 'add') {
      this.counter = this.counter + 1;
    } 
    if(param==='remove') {
      this.counter = this.counter - 1;
    }
    // }
  }
  // for(let i=0;i<this.myForm.value.questions.length;i++){
  //   this.optionsAll.push(data.questions[i].options.option1,data.questions[i].options.option2,data.questions[i].options.option3,data.questions[i].options.option4)
  //   console.log('optionsALl :>> ', this.optionsAll);
  //   console.log('data-->',data.questions[i].options.option1);
  //   console.log('data-->',data.questions[i].options.option2);
  //   console.log('data-->',data.questions[i].options.option3);
  //   console.log('data-->',data.questions[i].options.option4);
  //   data.questions[i].options.option1;
  // console.log('object :>> ',  data.map(({options})=>{options}));
  // }

  public removeQuestion(i: number) {
    this.generateCounter('remove');
    this.formMobile.removeAt(i);
  }

  public removeNote(i: number) {
    const notesRemove = this.myForm.get('notes') as FormArray;
    notesRemove.removeAt(i);
  }

  public onSubmit(): void {
    console.log('this.myForm.value :>> ', this.myForm.value);
    const { subjectName, questions, notes } = this.myForm.value;
    const data: any = {};
    const finalQuestions: any = [];
    data.subjectName = subjectName;
    data.notes = notes;
    questions.forEach((element) => {
      console.log('element :>> ', element);
      const finalElement: any = {};
      const dummyElement: any = {};
      finalElement.question = element.question;
      finalElement.answer = element.answer;
      finalElement.options = [];
      dummyElement.options = [];
      dummyElement.options.push(Object.values(element.options));
      console.log('finalElement.options :>> ', finalElement.options);
      dummyElement.options.forEach((element) => {
        finalElement.options = element;
      });
      finalQuestions.push(finalElement);
    });

    data.questions = finalQuestions;

    console.log('data :>> ', data);

    this.apiService.createExam(data).subscribe({
      next: (res) => {
        console.log('res :>> ', res);
        if (res.statusCode == 200) {
          this.isCreateExamHide = true;
          this.toaster.success(res.message);
        } else {
          this.toaster.error(res.message);
        }
      },
      error: (err) => {
        this.toaster.error(err.message);
      },
    });

    //   for (let value of Object.values(this.extraArray)) {
    //     this.optionsAll.push(value);
    //     console.log('this.optionsAll :>> ', this.optionsAll);
    // }
  }
}
