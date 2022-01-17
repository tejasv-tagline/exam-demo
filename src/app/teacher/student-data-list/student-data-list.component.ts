import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { showAllData } from 'src/app/interface/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-student-data-list',
  templateUrl: './student-data-list.component.html',
  styleUrls: ['./student-data-list.component.scss'],
})
export class StudentDataListComponent implements OnInit {
  public isShowedData: boolean = false;
  public passMessage!: string;
  public ShowData: any;
  public allData: showAllData[] = [];
  token = localStorage.getItem('teacherToken');
  constructor(private apiservice: ApiService, private toaster: ToastrService) {
    // console.log('token :>> ', token);
  }

  ngOnInit(): void {
    // console.log('token :>> ', this.token);
    setTimeout(() => {
      this.apiservice.getStudentsData().subscribe({
        next: (res: any) => {
          this.isShowedData = true;
          this.allData = res.data;
          this.passMessage = res.message;
          // console.log('res :>> ', res);
          this.toaster.success('', res.message);
        },
        error: (err) => {
          console.log('err.message :>> ', err.message);
        },
      });
    }, 800);
  }
}
