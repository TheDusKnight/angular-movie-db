import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DetailService {
  rootURL = 'https://trevor-imdb-framework.wm.r.appspot.com/';
  // rootURL = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getSearch(name: string) {
    let searchURL = this.rootURL + '/search/multi/' + name;
    return this.http.get(searchURL);
  }

  getVideo(type: string, id: string) {
    let videoURL = this.rootURL + '/' + type + '/video/' + id;
    return this.http.get(videoURL)
  }
  getDetail(type: string, id: string) {
    let detailURL = this.rootURL + '/' + type + '/detail/' + id;
    return this.http.get(detailURL)
  }
  getReview(type: string, id: string) {
    let reviewURL = this.rootURL + '/' + type + '/review/' + id;
    return this.http.get(reviewURL)
  }
  getCast(type: string, id: string) {
    let castURL = this.rootURL + '/' + type + '/cast/' + id;
    return this.http.get(castURL)
  }
  getCastDetail(id: string) {
    let castDetailURL = this.rootURL + '/cast/detail/' + id;
    return this.http.get(castDetailURL)
  }
  getCastExternal(id: string) {
    let castExternalURL = this.rootURL + '/cast/external/' + id;
    return this.http.get(castExternalURL)
  }
  getRecommend(type: string, id: string) {
    let RecommendURL = this.rootURL + '/recommend/' + type + '/'+ id;
    return this.http.get(RecommendURL)
  }
  getSimilar(type: string, id: string) {
    let SimilarURL = this.rootURL + '/similar/' + type + '/' + id;
    return this.http.get(SimilarURL)
  }
}
