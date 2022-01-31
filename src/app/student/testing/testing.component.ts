import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  public myForm!:FormGroup;
  public address!:FormGroup;
  public mobile:FormArray;
  public questions:FormArray;
  public notes:FormArray;
  // public options:FormArray;


  constructor(private fb:FormBuilder) { 
    // this.myForm= new FormGroup({
    //   firstName:new FormControl(''),
    //   lastName:new FormControl(''),
    //   address:new FormGroup({
    //     street:new FormControl(''),
    //     area:new FormControl(''),
    //     pin:new FormControl('')
    //   }),
    //   mobile:new FormControl('')
    // })

    // this.myForm=this.fb.group({
    //   firstName:[''],
    //   lastName:[''],
    //   address:new FormGroup({
    //     street:new FormControl(),
    //     area:new FormControl(),
    //     pin:new FormControl()
    //   }),
    //   mobile:['']
    // })


    // this.myForm=this.fb.group({
    //   firstName:[''],
    //   lastName:[''],
    //   address:this.fb.group({
    //     street:[''],
    //     area:[''],
    //     pin:['']
    //   }),
    //   mobile:this.fb.array([new FormControl(null,Validators.required)])
    // })

    this.myForm=this.fb.group({
      subjectName:[''],
      questions:new FormArray([]),
      notes:new FormArray([
        new FormControl(null,Validators.required)
      ])
    })
  }

  ngOnInit(): void {
    // console.log('myForm.get ', this.myForm.get('questions')['controls']);
    this.addQuestion();
  }

  get noteControl(){
    return this.myForm.get('notes') as FormArray;
  }
  public addNote(){
    this.noteControl.push(new FormControl(null,Validators.required))
  }

  public defauldControls(){
    return this.fb.group({
      question:[''],
      answer: [''],
      // options:['ans1','ans2','ans3','ans4']
    })
  }
  
  get formMobile(){
    return this.myForm.get('questions') as FormArray;
  }

  public addQuestion(){
    this.formMobile.push(this.defauldControls());
  }

  public removeQuestion(i:number){
    this.questions.removeAt(i);
  }
  public onSubmit():void{
    console.log('this.myForm.value :>> ', this.myForm.value);
  }
} 
