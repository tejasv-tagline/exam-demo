import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
  title = 'exam-demo';
  public isLoading=true;
  
  constructor(private router:Router,private spinner:NgxSpinnerService){
    this.router.events.subscribe((e : RouterEvent) => {
      this.navigationInterceptor(e);
    })
  }
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.spinner.show();
    }
    if (event instanceof NavigationEnd) {
            this.spinner.hide();
    }

    // Set isLoading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
            this.spinner.hide();
    }
    if (event instanceof NavigationError) {
            this.spinner.hide();
    }
  }
}
