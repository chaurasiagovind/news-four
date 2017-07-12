import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsService {

		private key = ""; //Add your key here 
		private newsUrl = 'https://newsapi.org/v1/articles?source=';  // URL to web api
		private urlSuffix = '&apiKey='+this.key;

constructor(private http: Http) { }
   
getNews(id): Promise<any> {
  return this.http.get(this.newsUrl+id+this.urlSuffix)
             .toPromise()
             .then(response => response.json())
             .catch(this.handleError);
}
 
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}


}