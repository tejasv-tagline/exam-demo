import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public passId!: string;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.passId=this.route.snapshot.params['_id'];
    console.log('this.passId :>> ', this.passId);
    this.viewDetails();
  }
  viewDetails() {
    this.apiService.getDetails(this.passId).subscribe({
      next: (res) => {
        this.name = res.data[0].name;
        this.email = res.data[0].email;
        this.id = res.data[0]._id;
      },
    });
  }
}
