import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { viewExamData, ViewExamPaperResponse } from 'src/app/interface/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-exam-paper',
  templateUrl: './exam-paper.component.html',
  styleUrls: ['./exam-paper.component.scss']
})
export class ExamPaperComponent implements OnInit {

  public capturedId!:string;
  public questionList:viewExamData[]=[];
  public index:number=0;
  public indexArray:number[]=[];
  public isExamShowed:boolean=false;


  constructor(private route:ActivatedRoute,private apiService:ApiService,private toaster:ToastrService) { 
   this.capturedId=this.route.snapshot.params['_id'];
   console.log('this.capturedId :>> ', this.capturedId);
  }

  ngOnInit(): void {
    this.apiService.viewExamById(this.capturedId)
    .subscribe({
      next:(res:ViewExamPaperResponse)=>{
        // console.log('res :>> ', res);
        if(res.statusCode==200){
          this.isExamShowed=true;
          this.toaster.success(res.message);
          // console.log('res.data :>> ', res.data);
          this.questionList=res.data;
          // console.log('this.questionList :>> ', this.questionList);
          // for(this.index=0;this.index<this.questionList.length;this.index++){
          //     this.indexArray.push(this.index);
          //   }
          //   console.log('this.indexArray :>> ', this.indexArray);
        }
        else{
          this.toaster.error(res.message);
        }
      }
    })
  }

}
