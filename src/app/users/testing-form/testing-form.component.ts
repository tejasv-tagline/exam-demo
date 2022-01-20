import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-testing-form',
  templateUrl: './testing-form.component.html',
  styleUrls: ['./testing-form.component.scss']
})
export class TestingFormComponent implements OnInit {
  public myForm!:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
