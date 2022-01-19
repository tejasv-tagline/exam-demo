import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  VerifiedStudentsData,
  VerifiedStudentsDataResponse,
} from 'src/app/interface/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-verify-student-data',
  templateUrl: './verify-student-data.component.html',
  styleUrls: ['./verify-student-data.component.scss'],
})
export class VerifyStudentDataComponent implements OnInit {
  public count!: number;
  public isDataShowed: boolean = false;
  public verifiedStudents: VerifiedStudentsData[] = [
    {
      email: '',
      name: '',
      status: '',
      _id: '',
    },
  ];

  constructor(private apiService: ApiService, private toaster: ToastrService) {}

  ngOnInit(): void {
    this.apiService.verifyStudentData().subscribe({
      next: (res: VerifiedStudentsDataResponse) => {
        if (res.statusCode == 200) {
          this.isDataShowed = true;
          // console.log('res :>> ', res.data);
          this.verifiedStudents=res.data;
          console.log('this.verifiedStudents :>> ', this.verifiedStudents);
          this.toaster.success(res.message);
          this.count = res.count;
        } else {
          this.toaster.error(res.message);
        }
      },
    });
  }
}
