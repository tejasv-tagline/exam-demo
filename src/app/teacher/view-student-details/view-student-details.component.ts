import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  // public passId!: string;
  public studentDetails=[];
  public studentDetailsResponse=this.activatedRoute.snapshot.data['viewSingleStudentResolver'];

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    // this.passId = this.route.snapshot.params['_id'];
    // this.viewDetails();
    if(this.studentDetailsResponse.statusCode==200){
      this.name=this.studentDetailsResponse.data[0].name;
      this.email=this.studentDetailsResponse.data[0].email;
      this.id=this.studentDetailsResponse.data[0].id;
      this.toaster.success(this.studentDetailsResponse.message);
    }
    else{
      this.toaster.error(this.studentDetailsResponse.message);
    }
  }
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
