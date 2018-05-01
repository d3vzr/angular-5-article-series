import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class NewsService {
  key = environment.news_api_key;
  constructor(private http: Http) { }
 
  getTopHeadLines(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='+this.key);
  }

  getNewBySource(source){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.key);
  }

  getSources(){
    return this.http.get('https://newsapi.org/v2/sources?apiKey='+this.key);
  }


}
