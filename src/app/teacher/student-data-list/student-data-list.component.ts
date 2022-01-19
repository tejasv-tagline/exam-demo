import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { IStudentData, showAllData } from 'src/app/interface/common';
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
  public token = localStorage.getItem('teacherToken');
  public showed = new Observable();
  public teacherName: string | null = localStorage.getItem('teacherName');

  constructor(
    private apiservice: ApiService,
    private toaster: ToastrService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    console.log(
      'localStorage.getItem(`teacherName`) :>> ',
      typeof localStorage.getItem('teacherName')
    );
    this.getStudentData();
  }

  public getStudentData():void {
    this.apiservice.getStudentsData().subscribe({
      next: (res: IStudentData) => {
        if (res.statusCode == 200) {
          setTimeout(() => {
            this.isShowedData = true;
            this.allData = res.data;
            this.passMessage = res.message;
            this.toaster.success('', res.message);
          }, 1500);
        } else {
          this.toaster.error(res.message);
        }
      },
      error: (err) => {
        this.toaster.error(err.message);
      },
    });
  }

}
