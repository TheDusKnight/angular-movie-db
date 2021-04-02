import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DetailService {
  host = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getSearch(name: string) {
    let searchURL = this.host + '/search/multi/' + name;
    return this.http.get(searchURL);
  }

  getVideo(type: string, id: string) {
    let videoURL = this.host + type + '/video/' + id;
    return this.http.get(videoURL)
  }
  getDetail(type: string, id: string) {
    let detailURL = this.host + type + '/detail/' + id;
    return this.http.get(detailURL)
  }
  getReview(type: string, id: string) {
    let reviewURL = this.host + type + '/review/' + id;
    return this.http.get(reviewURL)
  }
  getCast(type: string, id: string) {
    let castURL = this.host + type + '/cast/' + id;
    return this.http.get(castURL)
  }
  getCastDetail(id: string) {
    let castDetailURL = this.host + 'cast/detail/' + id;
    return this.http.get(castDetailURL)
  }
  getCastExternal(id: string) {
    let castExternalURL = this.host + 'cast/external/' + id;
    return this.http.get(castExternalURL)
  }
  getRecommend(type: string, id: string) {
    let RecommendURL = this.host + 'recommend/' + type + '/'+ id;
    return this.http.get(RecommendURL)
  }
  getSimilar(type: string, id: string) {
    let SimilarURL = this.host + 'similar/' + type + '/' + id;
    return this.http.get(SimilarURL)
  }
}
