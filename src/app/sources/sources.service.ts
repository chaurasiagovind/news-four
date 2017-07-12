import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/toPromise';

@Injectable()
export class SourcesService {
private sourceUrl = 'https://newsapi.org/v1/sources?language=en';  // URL to web api 

constructor(private http: Http) { }
   
getSources(): Promise<any> {
  return this.http.get(this.sourceUrl)
             .toPromise()
             .then(response => response.json())
             .catch(this.handleError);
}
 
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}


}