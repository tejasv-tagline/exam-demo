import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { canComponentDeactivate } from 'src/app/AuthGuard/auth.guard';
import { IStudentData, showAllData } from 'src/app/interface/common';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-student-data-list',
  templateUrl: './student-data-list.component.html',
  styleUrls: ['./student-data-list.component.scss'],
})
export class StudentDataListComponent implements OnInit,canComponentDeactivate {
  public isShowedData: boolean = false;
  public passMessage!: string;
  public ShowData: any;
  public allData: showAllData[] = [];
  public token: string | null;
  public showed = new Observable();
  public teacherName: string | null;
  public dataResponse: IStudentData;
  public count:number;
  public p:number=1;
  public total:number=30; 


  constructor(
    private apiservice: ApiService,
    private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.token = localStorage.getItem('teacherToken');
    this.teacherName = localStorage.getItem('teacherName');
    this.dataResponse = this.activatedRoute.snapshot.data['studentList'];
  }
  public confirm():boolean {
    return window.confirm('Are you sure want to leave the page');
  }

  ngOnInit(): void {
    //   'localStorage.getItem(`teacherName`) :>> ',
    //   typeof localStorage.getItem('teacherName')
    // );
    // this.getStudentData();

    if (this.dataResponse.statusCode == 200) {
      this.allData = this.dataResponse.data;
      // this.count=this.dataResponse.data.length;
      // for(let i=0;i<this.count;i++){
      //   // if()
      //   this.activeStudents.push(this.dataResponse.data[i].status=='Active');
      // }
      this.isShowedData = true;
      this.toaster.success(this.dataResponse.message);
    } else {
      this.toaster.error(this.dataResponse.message);
    }
  }

  // public getStudentData(): void {
  //   // this.apiservice.getStudentsData().subscribe({
  //   //   next: (res: IStudentData) => {
  //   //     if (res.statusCode == 200) {
  //   //       setTimeout(() => {
  //   //         this.isShowedData = true;
  //   //         this.allData = res.data;
  //   //         this.passMessage = res.message;
  //   //         this.toaster.success('', res.message);
  //   //       }, 1500);
  //   //     } else {
  //   //       this.toaster.error(res.message);
  //   //     }
  //   //   },
  //   //   error: (err) => {
  //   //     this.toaster.error(err.message);
  //   //   },
  //   // });
  // }
}
