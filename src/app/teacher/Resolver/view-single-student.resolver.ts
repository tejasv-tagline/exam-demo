import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ViewSingleStudentResolver implements Resolve<boolean> {
  constructor(private apiService:ApiService,private activatedRoute:ActivatedRoute){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.apiService.getDetails(route.paramMap.get('_id'));
  }
}
