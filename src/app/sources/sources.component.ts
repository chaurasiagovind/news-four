import { Component, Input, OnInit } from '@angular/core';
import { SourcesService } from './sources.service';


@Component({
  selector: 'source-tile',
   templateUrl: './sources.component.html',
    providers:[SourcesService]
})
export class SourceComponent implements OnInit{

  sources:   Array<any>;

constructor(private sourceService: SourcesService) { }
 
  getAllNews(): void {
    this.sourceService.getSources().then(res => this.sources = res);
  }
 
  ngOnInit(): void {
    this.getAllNews();
    console.log(this.sources);
  }
 

}

