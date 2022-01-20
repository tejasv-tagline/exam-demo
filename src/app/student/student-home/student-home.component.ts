import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {
  public studentName!:string | null;
  public studentEmail!:string | null;

  constructor() { }

  ngOnInit(): void {
    this.studentName=localStorage.getItem('studentName');
    this.studentEmail=localStorage.getItem('studentEmail');
  }

}
