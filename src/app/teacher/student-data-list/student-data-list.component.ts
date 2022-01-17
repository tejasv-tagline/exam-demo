import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-student-data-list',
  templateUrl: './student-data-list.component.html',
  styleUrls: ['./student-data-list.component.scss'],
})
export class StudentDataListComponent implements OnInit {
  public passMessage!:string;
  constructor(private apiservice: ApiService,private toaster:ToastrService) {
    const token = localStorage.getItem('token');
    // console.log('token :>> ', token);
  }

  ngOnInit(): void {
    this.apiservice.getStudentsData().subscribe({
      next: (res:any) => {
        // this.toaster.success(res);

        console.log('res :>> ', res);
        this.passMessage=res.message;
        this.toaster.success("", res.message);
        // console.log('res :>> ', res);
      },
      error: (err) => {
        console.log('err.message :>> ', err.message);
      },
    });
  }
}
