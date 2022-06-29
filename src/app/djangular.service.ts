import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DjangularService {
readonly APIUrl = "https://arcane-sierra-50808.herokuapp.com";

  constructor(private http:HttpClient) { }

  getListData():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/')
  }

  // refreshData(){
  //   return this.http.get(this.APIUrl + '/refresh')
  // }
}
