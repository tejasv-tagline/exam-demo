import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // public studentTtoken = localStorage.getItem('studentToken');
  // public teacherToken = localStorage.getItem('teacherToken');
  public token = localStorage.getItem('token') || '';
  private headers: any;
  public isLoggedOut: boolean = false;
  // public studentHeaders = new HttpHeaders().append(
  //   'access-token',
  //   this.studentTtoken ? this.studentTtoken : ''
  // );
  // public teacherHeaders = new HttpHeaders().append(
  //   'access-token',
  //   this.teacherToken ? this.teacherToken : ''
  // );

  //  isToken() {
  //     if(this.token){
  //          this.headers = new HttpHeaders().append('access-token', this.token);
  //     }
  //   }

  constructor(private http: HttpClient) {
    // console.log('this.studenttoken :>> ', this.studentTtoken);
    // console.log('this.teachertoken :>> ', this.teacherToken);
  }

  public setUsername(myForm: any): Observable<any> {
    return this.http.post(
      'https://nodejsexamination.herokuapp.com/users/SignUp',
      myForm
    );
  }

  public getUserData(myForm: any): Observable<any> {
    return this.http.post(
      'https://nodejsexamination.herokuapp.com/users/Login',
      myForm
    );
  }
  public getStudentsData(): Observable<any> {
    return this.http.get(
      'https://nodejsexamination.herokuapp.com/dashboard/Teachers'
    );
  }

  public getProfile(): Observable<any> {
    return this.http.get(
      'https://nodejsexamination.herokuapp.com/student/getStudentDetail'
    );
  }

  public getDetails(id:string): Observable<any> {
    return this.http.get(
      'https://nodejsexamination.herokuapp.com/dashboard/Teachers/viewStudentDetail?id='+id
    );
  }
}
