import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss'],
})
export class ExamListComponent implements OnInit {

  public studentExamList:any

  constructor(private apiService: ApiService,private toaster:ToastrService) {}

  ngOnInit(): void {
    this.apiService.viewAllExams().subscribe({
      next: (res) => {
        if(res.statusCode==200){
          this.toaster.success(res.message);
          console.log('res :>> ', res.data);


        }
      },
    });
  }
}
