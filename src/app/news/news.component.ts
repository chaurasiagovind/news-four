import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { NewsService } from './news.service';


@Component({
  selector: 'news-card',
  templateUrl: './news.component.html',
    providers:[NewsService],
     styles: ['.articles { max-width: 600px; margin: 60px auto; }']
})
export class NewsComponent implements OnInit{

  news:   Array<any>;

constructor(
  private newsService: NewsService,
   private route: ActivatedRoute,
  private location: Location) { }
 
  // getAllNews(id): void {
  //   this.newsService.getNews(id)
  // }
 
  ngOnInit(): void {

     this.route.paramMap
    .switchMap((params: ParamMap) => this.newsService.getNews(params.get('id')))
    .subscribe(res => this.news = res);


    
    console.log(this.news);
  }
 

}
