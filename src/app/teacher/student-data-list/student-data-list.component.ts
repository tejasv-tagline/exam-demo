import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
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
  public token = localStorage.getItem('teacherToken');
  public showed=new Observable();
  


  constructor(private apiservice: ApiService, private toaster: ToastrService, private route:ActivatedRoute) {
    // console.log('token :>> ', token);
  }

  ngOnInit(): void {


    // console.log('token :>> ', this.token);

    this.getStudentData();
    // }, 5000);
  }
  getStudentData() {
    this.apiservice.getStudentsData().subscribe({
      next: (res: any) => {
        if (res) {
          setTimeout(() => {
            this.isShowedData = true;
            this.allData = res.data;
            this.passMessage = res.message;
            // console.log('res :>> ', res);
            this.toaster.success('', res.message);
          }, 1500);
        }
      },
      error: (err) => {
        // console.log('err.message :>> ', err.message);
        this.toaster.error(err.message);
      },
    });
  }

  
  }


// this.myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })

