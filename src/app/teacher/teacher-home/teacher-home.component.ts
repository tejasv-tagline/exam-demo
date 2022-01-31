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
  public teacherName: string | null = '';
  public teacherEmail: string | null = '';
  public teacherHome = [
    {
      image: '/assets/bg1.jpg',
      title: 'View All Students Data',
      text: `To view all student's data click here`,
      button: `student's data`,
      routerLink:'studentDataList',
      class:'btn-outline-light'
    },
    {
      image: '/assets/bg2.jpg',
      title: 'Create Exam',
      text: `To create exam click here`,
      button: `Create exam`,
      routerLink:'createExam',
      class:'btn-outline-light'

    },
    {
      image: '/assets/bg3.jpg',
      title: 'View exams',
      text: `To view all exam's click here`,
      button: `View exams`,
      routerLink:'viewExam',
      class:'btn-outline-light'

    },
    {
      image: '/assets/bg4.jpg',
      title: 'Verified Students',
      text: `To view all verified student's list click here`,
      button: `Verified students`,
      routerLink:'verifyStudentData',
      class:'btn-outline-light'

    },
    {
      image: '/assets/bg5.jpg',
      title: 'Reset Password',
      text: `To reset you login password click here`,
      button: `Reset password`,
      routerLink:'/resetPassword',
      class:'btn-outline-warning'
    },
    {
      image: '/assets/bg5.jpg',
      title: 'Logout',
      text: `To logout from your account click here`,
      button: `Logout`,
      routerLink:'/login',
      class:'btn-outline-danger'
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.teacherName = localStorage.getItem('teacherName');
    this.teacherEmail = localStorage.getItem('teacherEmail');
  }
}
