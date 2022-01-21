import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-testing-form',
  templateUrl: './testing-form.component.html',
  styleUrls: ['./testing-form.component.scss'],
})
export class TestingFormComponent implements OnInit {
  public myForm!: FormGroup;
  public items!: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm=this.fb.group({
      lessions:this.fb.array([])
    })
    // this.myForm = new FormGroup({
    //   items: new FormArray([]),
    // });
  }

  get lessions(){
    return this.myForm.controls['lessions'] as FormArray;
  }

  // public addLesson(){
  //   const lessionForm = this.fb.group({
  //     title:'',
  //     level:''
  //   })
  //   this.lessions.push(lessionForm)
  // }

  // createItem(): FormGroup {
  //   return this.fb.group({
  //     name: '',
  //     description: '',
  //     price: '',
  //   });
  // }

  // addItem(): void {
  //   this.items = this.myForm.get('items') as FormArray;
  //   this.items.push(this.createItem());
  // }

  // showItem() {
  //   console.log(this.myForm.value);
  // }
}
