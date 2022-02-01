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
  public tokenA: boolean = false;
  public name: string | null;
  public tokenNotPresent:boolean=false;

  constructor(private router: Router, private apiService: ApiService) {
    this.name=localStorage.getItem('teacherName')?localStorage.getItem('teacherName'):localStorage.getItem('studentName');
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.tokenA = true;
    }else{
      this.tokenNotPresent=true;
    }
  }

  public logOutUser() {
    this.tokenA = false;
    this.tokenNotPresent=true;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  public navigateHome():void{
    if(localStorage.getItem('teacherName')){
      this.router.navigate(['/teacher'])
    }
    else{
      this.router.navigate(['/student'])
    }
  }
}
