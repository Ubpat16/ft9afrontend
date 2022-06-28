import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DjangularService {
readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }

  getListData():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/')
  }

  refreshData(){
    return this.http.get(this.APIUrl + '/refresh')
  }
}
