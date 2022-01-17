import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // public isLoggedIn=this.apiService.isLoggedOut;

  constructor(private router: Router, private apiService: ApiService) {}
  ngOnInit(): void {
    // this.apiService.isLoggedOut.subscribe((value)=>{
    //   console.log('value :>=======> ', value);
    // });
    // console.log('header :>> ', this.isLoggedIn);
  }

  public logOutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
