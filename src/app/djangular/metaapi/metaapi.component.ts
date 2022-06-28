import { Component, OnInit } from '@angular/core';
import { DjangularService } from 'src/app/djangular.service';

@Component({
  selector: 'app-metaapi',
  templateUrl: './metaapi.component.html',
  styleUrls: ['./metaapi.component.css']
})
export class MetaapiComponent implements OnInit {

  constructor(private service:DjangularService) { }

  MetaAPIList:any=[];

  ngOnInit(): void {
    this.refreshMetaList();
  }

  refreshMetaList(){
    this.service.getListData().subscribe(data=>{
      this.MetaAPIList=data;
    })
  }
}
