import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      }
    ]
  },
  {
    path:'teacher',
    children:[
      {
        path:'',
        loadChildren:()=>import('./teacher/teacher.module') .then(m=>m.TeacherModule)
      }
    ]
  },
  {
    path:'student',
    children:[
      {
        path:'',
        loadChildren:()=>import('./student/student.module') .then(m=>m.StudentModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
