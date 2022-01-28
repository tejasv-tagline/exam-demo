import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginForm, MyExamForm, SignupData } from '../interface/common';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public token = localStorage.getItem('token') || '';
  private headers: any;
  public isLoggedOut: boolean = false;

  constructor(private http: HttpClient) {}

  // Signup Api starts
  public setUsername(myForm: SignupData): Observable<any> {
    return this.http.post(
      'https://nodejsexamination.herokuapp.com/users/SignUp',
      myForm
    );
  }
  // Signup Api ends

  // Login Api starts

  public getUserData(myForm: loginForm): Observable<any> {
    return this.http.post(
      'https://nodejsexamination.herokuapp.com/users/Login',
      myForm
    );
  }
  // Login Api ends

  // Students data list api starts
  public getStudentsData(): Observable<any> {
    return this.http.get(
      'https://nodejsexamination.herokuapp.com/dashboard/Teachers'
    );
  }
  // Students data list api ends

  public getProfile(): Observable<any> {
    return this.http.get(
      'https://nodejsexamination.herokuapp.com/student/getStudentDetail'
    );
  }

  public getDetails(id: string): Observable<any> {
    return this.http.get(
      `https://nodejsexamination.herokuapp.com/dashboard/Teachers/viewStudentDetail?id=${id}`
    );
  }

  public createExam(myExamForm: any): Observable<any> {
    return this.http.post(
      'https://nodejsexamination.herokuapp.com/dashboard/Teachers/Exam',
      myExamForm
    );
  }

  // view exam api starts
  public viewExam(): Observable<any> {
    return this.http.get(
      'https://nodejsexamination.herokuapp.com/dashboard/Teachers/viewExam'
    );
  }
  // view exam api ends

  // view single exam api starts
  public viewSingleExam(id: string): Observable<any> {
    return this.http.get(
      `https://nodejsexamination.herokuapp.com/dashboard/Teachers/examDetail?id=${id}`
    );
  }
  // view single exam api ends

  //Verify student data for exam api starts
  public verifyStudentData(): Observable<any> {
    return this.http.get(
      'https://nodejsexamination.herokuapp.com/dashboard/Teachers/StudentForExam'
    );
  }

  //Verify student data for exam api ends

  //view all exams for students starts
  public viewAllExams(): Observable<any> {
    return this.http.get(
      'https://nodejsexamination.herokuapp.com/student/studentExam'
    );
  }
  //view all exams for students ends

  //View exam by id starts
  public viewExamById(id: string): Observable<any> {
    return this.http.get(
      `https://nodejsexamination.herokuapp.com/student/examPaper?id=${id}`
    );
  }
  //View exam by id ends

  //Edit exam api starts
  public editTeacherExam(id: string, myForm: any): Observable<any> {
    return this.http.put(
      `https://nodejsexamination.herokuapp.com/dashboard/Teachers/editExam?id=${id}`,
      myForm
    );
  }
  //Edit exam api ends

  //Delete exam api starts
  public deleteExam(id: string): Observable<any> {
    return this.http.delete(
      `https://nodejsexamination.herokuapp.com/dashboard/Teachers/deleteExam?id=${id}`
    );
  }

  //Forgot password api starts
  public forgotPassword(myForm: any): Observable<any> {
    return this.http.post(
      'https://nodejsexamination.herokuapp.com/users/ForgotPassword',
      myForm
    );
  }
  //Forgot password api ends

  //Student submit exam api starts
  public submitExam(id: string, myExam: MyExamForm[]): Observable<any> {
    return this.http.post(
      `https://nodejsexamination.herokuapp.com/student/giveExam?id=${id}`,
      myExam
    );
  }
  //Student submit exam api ends

  //Update student profile api starts
  public updateStudentProfile(name: any): Observable<any> {
    return this.http.put(
      'https://nodejsexamination.herokuapp.com/student/studentProfile',
      name
    );
  }
  //Update student profile api ends

  //change password  api starts

  public newPasswordTokenCheck(): Observable<any> {
    return this.http.get(
      'https://nodejsexamination.herokuapp.com/users/newPassword'
    );
  }

  public changeStudentPassword(
    token: void | string,
    myForm: any
  ): Observable<any> {
    return this.http.post(
      `https://nodejsexamination.herokuapp.com/users/ForgotPassword/Verify?token=${token}`,
      myForm
    );
  }
  //change password  api ends

  //New password api starts here
  public newPassword(myForm: any): Observable<any> {
    return this.http.post(
      'https://nodejsexamination.herokuapp.com/users/ResetPassword',
      myForm
    );
  }
  //New password api ends here
}
