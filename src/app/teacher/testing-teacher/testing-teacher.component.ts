import { Component, OnInit } from '@angular/core';
import {
  FormArray,
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
  selector: 'app-testing-teacher',
  templateUrl: './testing-teacher.component.html',
  styleUrls: ['./testing-teacher.component.scss'],
})
export class TestingTeacherComponent implements OnInit {
  public myForm: FormGroup;
  // public address:FormGroup;
  public street:FormArray;
  public dumyArray=[]
  public streetArray;
  public streetArrayControls;

  constructor(
    private apiService: ApiService,
    private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // this.addNewAddress();
    this.myForm = this.fb.group({
      firstName: new FormControl(null),
      hobbies: this.fb.array([
        new FormControl(null)
      ]),
      address:this.fb.group({
        street:this.fb.array([
          new FormControl(null)
        ])
      })
    });

    console.log('myForm :>> ',  );
    this.dumyArray=this.myForm.get('address')['controls'];
    this.streetArray=Object.values(this.dumyArray).map((value) => [(value), this.dumyArray[value]][0].controls);
    this.streetArrayControls=Object.values(this.dumyArray).map((value) => [(value), this.dumyArray[value]][0].controls);
  }
  public updateDetails() {

    let firstNameDummy=this.myForm.get('firstName').value
    let hobbies=['this.myForm.value.hobbies','This is hobby'];
    this.myForm.patchValue({firstName:firstNameDummy,hobbies:hobbies});
    console.log('this.myForm.value :>> ',this.myForm.value);
  }

  get hobby(){
    return this.myForm.get('hobbies') as FormArray;
  }
  public addNewHobby(){
      this.hobby.push(new FormControl(null))
  }
  public removeHobby(i:number){
    this.hobby.removeAt(i);
  }
  // get address(){
  //   let dummyArray:any;
  //   // debugger
  //   // console.log('dummyArray :>> ', dummyArray);
  //   dummyArray= this.myForm.get('address') as FormGroup;
  //   return dummyArray.get('street') as FormArray;

  // }
  public addNewAddress(){
    console.log('this.streetArray :>> ', this.streetArray);
    this.streetArrayControls.push(new FormControl(null))
  }
}
