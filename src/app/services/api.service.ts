import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { loginForm, SignupData } from '../interface/common';
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

  public getUserData(myForm:loginForm): Observable<any> {
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
  public viewExam():Observable<any>{
    return this.http.get('https://nodejsexamination.herokuapp.com/dashboard/Teachers/viewExam');
  }
  // view exam api ends


  // view single exam api starts
  public viewSingleExam(id:string):Observable<any>{
    return this.http.get(`https://nodejsexamination.herokuapp.com/dashboard/Teachers/examDetail?id=${id}`)
  }
  // view single exam api ends

}
