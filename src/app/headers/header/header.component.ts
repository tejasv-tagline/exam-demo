import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // public isLoggedIn=this.apiService.isLoggedOut;
  // public getToken:any=localStorage.getItem('token');
  public tokenA: boolean = true;
  public teacherName: string | null;

  constructor(private router: Router, private apiService: ApiService) {
    this.teacherName=localStorage.getItem('teacherName')?localStorage.getItem('teacherName'):localStorage.getItem('studentName');
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.tokenA = false;
    }
  }

  public logOutUser() {
    this.tokenA = false;
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
