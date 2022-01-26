import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ViewAllExam } from 'src/app/interface/common';
import { ApiService } from 'src/app/services/api.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss'],
})
export class ViewExamComponent implements OnInit {
  public examName!: string;
  public email!: string;
  public id!: string;
  public v!: string;
  public notes: string[] = [];
  public allExamList: ViewAllExam[] = [];
  public closeResult!: string;
  public isDataShowed:boolean=false;
  public allExamResponse=this.activatedRoute.snapshot.data['examList']

  constructor(
    private apiService: ApiService,
    private toaster: ToastrService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.allExams();
    // this.apiService.viewExam().subscribe({
    //   next: (res) => {
    //     this.isDataShowed=true;
    //     if (res.statusCode == 200) {
    //       this.toaster.success(res.message);
    //       this.allExamList = res.data;
    //     } else {
    //       this.toaster.error(res.message);
    //     }
    //   },
    //   error: (err) => {
    //     this.toaster.error(err.message);
    //   },
    // });

  }

  public allExams():void{
    if(this.allExamResponse.statusCode==200){
      this.allExamList=this.allExamResponse.data;
      this.isDataShowed=true;
      this.toaster.success(this.allExamResponse.message);
    }
    else{
      this.toaster.error(this.allExamResponse.message);
    }
  }

  public open(id: string): void {
    this.allExamList.find((element) => {
      if (element._id === id) {
        this.examName = element.subjectName;
        localStorage.setItem('examName',this.examName);
        this.id = element._id;
        this.v = element.__v;
        this.email = element.email;
        this.notes = element.notes;
      }
    });
  }

  public deleteExam(id:string){
    this.apiService.deleteExam(id).subscribe({
      next:(res)=>{
        console.log('res :>> ', res);
        this.toaster.success(res.message);
        window.location.reload();
      }
    })
  }
  // public deleteExam(id:string){
  //   this.apiService.deleteExam().subscribe({
  //     next:(res)=>{
  //       console.log('res :>> ', res);
  //       if(res.statusCode==200){
  //         this.toaster.success(res.message);

  //       }
  //       else{
  //         this.toaster.error(res.message);
  //       }
  //     }
  //   })
  // }
}
