import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherLinks } from 'src/app/interface/common';
import { ApiService } from 'src/app/services/api.service';
import { LoginComponent } from 'src/app/users/login/login.component';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.scss'],
})
export class TeacherHomeComponent implements OnInit {
  public teacherName: string | null= '';
  public teacherEmail: string | null= '';

  constructor() {}

  ngOnInit(): void {
    this.teacherName = localStorage.getItem('teacherName');
    this.teacherEmail = localStorage.getItem('teacherEmail');
  }
}
