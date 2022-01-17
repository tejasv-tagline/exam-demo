import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public studentTtoken = localStorage.getItem('studentToken');
  public teacherToken = localStorage.getItem('teacherToken');

  public studentHeaders = new HttpHeaders().append(
    'access-token',
    this.studentTtoken ? this.studentTtoken : ''
  );
  public teacherHeaders = new HttpHeaders().append(
    'access-token',
    this.teacherToken ? this.teacherToken : ''
  );
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
  public getStudentsData() {
    return this.http.get(
      'https://nodejsexamination.herokuapp.com/dashboard/Teachers',
      { headers: this.teacherHeaders }
    );
  }

  public getProfile() {
    return this.http.get(
      'https://nodejsexamination.herokuapp.com/student/getStudentDetail',
      { headers: this.studentHeaders }
    );
  }
}
