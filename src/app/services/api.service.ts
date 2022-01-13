import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }
  setUsername(myForm: any):Observable<any>{
    return this.http.post('https://nodejsexamination.herokuapp.com/users/SignUp',myForm)
  }

  getUserData(myForm:any):Observable<any>{
    return this.http.post('https://nodejsexamination.herokuapp.com/users/Login',myForm)
  }
  getStudentsData(token:any){
    return this.http.get('https://nodejsexamination.herokuapp.com/dashboard/Teachers',token);
  }
}
