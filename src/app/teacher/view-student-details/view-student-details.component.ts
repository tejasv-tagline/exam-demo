import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  ResultArray,
  ViewSingleStudentData,
  ViewSingleStudentResponse,
} from 'src/app/interface/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-student-details',
  templateUrl: './view-student-details.component.html',
  styleUrls: ['./view-student-details.component.scss'],
})
export class ViewStudentDetailsComponent implements OnInit {
  public name!: string;
  public email!: string;
  public id!: string;
  public role!: string;
  // public passId!: string;
  public studentDetails = [];
  public isResultShowed: boolean = false;
  public heading3: boolean = false;
  public isColseButton: boolean = false;
  public isViewButton: boolean = true;
  public resultAnswer = [];
  public profileData: ViewSingleStudentData;
  public studentResult: ResultArray[];
  public response: ViewSingleStudentResponse;
  public isModalMessage = false;
  public questionNameResponse;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastrService
  ) {
    this.response =
      this.activatedRoute.snapshot.data['viewSingleStudentResolver'];
    // console.log('this.response---- :>> ', this.response);
  }

  ngOnInit(): void {
    // this.passId = this.route.snapshot.params['_id'];
    // this.viewDetails();
    if (this.response.statusCode == 200) {
      this.profileData = this.response.data[0];
      this.toaster.success(this.response.message);
      this.studentResult = this.response.data[0].Result;
      // console.log('this.studentResult :>> ', this.studentResult);
      // console.log('this.studentResult++++---- :>> ', this.studentResult);
      // console.log('this.studentResult :>> ', this.studentResult);
      // this.result=this.studentResult;

      // console.log('this.result :>> ', this.result);
    } else {
      this.toaster.error(this.response.message);
    }
  }

  public showData(): void {
    if (this.response.data[0].Result.length > 0) {
      this.isResultShowed = true;
      this.isColseButton = true;
      this.isViewButton = false;
    } else {
      this.heading3 = true;
    }
  }
  public hideData(): void {
    this.isResultShowed = false;
    this.isColseButton = false;
    this.isViewButton = true;
  }

  public openModal(index: number,resId:string):void {
    // this.getQuestionsName(resId);
    // console.log('resId :>> ', resId);
    if (this.studentResult[index].studentAnswer) {
      this.resultAnswer = this.studentResult[index].studentAnswer;
    }
    else{
      this.isModalMessage = true;
    }
  }

  // public getQuestionsName(id:string):void{
  //   console.log('api id :>> ', id);
  //   this.apiService.viewSingleExam('61e79c916f41a80015781a72').subscribe({
  //     next:(res)=>{
  //       console.log('res :>> ', res);
  //     }
  //   })
  //   // this.questionNameResponse=this.activatedRoute.snapshot.data['viewSingleExamResolver'];
  //   // console.log(this.questionNameResponse);

  // }
  // public viewDetails(): void {
  //   this.apiService.getDetails(this.passId).subscribe({
  //     next: (res) => {
  //       console.log('res :>> ', res);
  //       if (res.statusCode == 200) {
  //         this.toaster.success(res.message);
  //         this.name = res.data[0].name;
  //         this.email = res.data[0].email;
  //         this.id = res.data[0]._id;
  //       } else {
  //         this.toaster.error(res.message);
  //       }
  //     },
  //   });
  // }
}
