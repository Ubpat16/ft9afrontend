import { Component, OnInit } from '@angular/core';
import { DjangularService } from '../djangular.service';
import { map, interval } from 'rxjs';

@Component({
  selector: 'app-djangular',
  templateUrl: './djangular.component.html',
  styleUrls: ['./djangular.component.css']
})
export class DjangularComponent implements OnInit {

  constructor(private service:DjangularService) {}

  ngOnInit(): void {
    // interval(300000).pipe(
    //   map(() => {
    //     this.service.getListData();
    //   })
    // ).subscribe();
  }

  // get_data(){
  //   this.service.refreshData().subscribe(data=>{})  
  // }

}
