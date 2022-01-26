import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {

   }

  public isUserLoggedIn(){
    if(!localStorage.getItem('token')){
      return true;
    }
    else return false;
  } 


  // public canDeactivate(){
  //   return true;
  // }
}
