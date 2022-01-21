import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-testing-form',
  templateUrl: './testing-form.component.html',
  styleUrls: ['./testing-form.component.scss']
})
export class TestingFormComponent implements OnInit {
  public myForm!:FormGroup;
  skills: FormArray;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      skills:new FormArray([      ])
    })
    this.onAddSkills();
  }

  // get fControl(){
  //   return this.myForm.controls;
  // }

// get skills() : FormArray {
//   return this.myForm.get('skills') as FormArray
// }
  public onAddSkills():void{
    this.skills = this.myForm.get('skills') as FormArray;
    this.skills.push((new FormControl()));
    console.log('this.skills :>> ', this.skills.value);
  }
}
