import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss'],
})
export class CreateExamComponent implements OnInit {
  public myForm!: FormGroup;
  // public options!:FormArray;
  public questions!: FormArray;
  // public notes!:FormArray;
  public note:any='';
  public isShowButton:boolean=false;

  constructor(private fb: FormBuilder,private apiService:ApiService,private toaster:ToastrService ) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      subjectName: new FormControl('This is testing exam'),
      questions: new FormArray([]),
      notes: new FormControl(['Tejash','Arvind']),
    });

    console.log('this.myForm.get(notes).value :>> ', this.myForm.get('notes').value);
    this.addQuestion();
  }
  
  public createNote(){
    // return this.fb.group({
    //   note:''
    // })
  }
  // public addNote(){
  //   this.myForm.get('notes
  // }

  public createQuestion() {
    return this.fb.group({
      question: 'This is question',
      answer: 'This is answer',
      options: new FormControl(['option1','option2','option3','option4'])
    });
    // return this.fb.group({
    //   question: '',
    //   answer: '',
    //   options:[]
    // });
  }
  public addQuestion() {
    // this.options = this.myForm.get('questions[i]') as FormArray;
    // this.options.push('option1');
    this.questions = this.myForm.get('questions') as FormArray;
    this.questions.push(this.createQuestion());
    
  }
  public removeQuestion(i:number){
    // this.questions=this.myForm.get('questions') as FormArray
    // if(i>0){
      this.questions.removeAt(i);
    // }
  }

  public createExam(){
    console.log('this.myForm.value :>> ', this.myForm.value);
    this.apiService.createExam(this.myForm.value).subscribe({
      next:(res)=>{
        if(res.statusCode==200){
          this.isShowButton=true;
          this.toaster.success(res.message);
        console.log('res :>> ', res);
        }
        else{
          this.toaster.error(res.message);
        }
      },error:(err)=>{
         this.toaster.error(err);
      }
    })
  }
}
