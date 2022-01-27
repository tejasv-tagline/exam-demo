import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ViewAllExams } from 'src/app/interface/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss'],
})
export class ExamListComponent implements OnInit {

  public studentExamList:ViewAllExams[]=[];
  public isShowedData:boolean=false;
  public response=this.activatedRoute.snapshot.data['viewAllExamResolver'];

  constructor(private apiService: ApiService,private toaster:ToastrService,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    if(this.response.statusCode==200){
      this.isShowedData=true;
      this.toaster.success(this.response.message);
      this.studentExamList=this.response.data;
    }
    else{
      this.toaster.error(this.response.message);
    }
    // this.apiService.viewAllExams().subscribe({
    //   next: (res) => {
    //     if(res.statusCode==200){
    //       this.isShowedData=true;
    //       this.toaster.success(res.message);
    //       this.studentExamList=res.data;
    //     }
    //   },
    // });
  }
}
