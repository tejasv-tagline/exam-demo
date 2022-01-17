import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public token = localStorage.getItem('Token');

  public headers = new HttpHeaders().append(
    'access-token',
    this.token ? this.token : ''
  );

  constructor(private http: HttpClient) {
    console.log('this.token :>> ', this.token);
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
      { headers: this.headers }
    );
  }
}
