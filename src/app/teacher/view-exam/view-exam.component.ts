import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ViewAllExam } from 'src/app/interface/common';
import { ApiService } from 'src/app/services/api.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  closeResult!: string;

  constructor(
    private apiService: ApiService,
    private toaster: ToastrService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.apiService.viewExam().subscribe({
      next: (res) => {
        if (res.statusCode == 200) {
          this.toaster.success(res.message);
          this.allExamList = res.data;
        } else {
          this.toaster.error(res.message);
        }
      },
      error: (err) => {
        this.toaster.error(err.message);
      },
    });
  }

  public open(id: string): void {
    this.allExamList.find((element) => {
      if (element._id === id) {
        this.examName = element.subjectName;
        this.id = element._id;
        this.v = element.__v;
        this.email = element.email;
        this.notes = element.notes;
      }
    });
  }
}
