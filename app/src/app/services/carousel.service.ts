import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  data = {}
  rootURL = 'https://trevor-imdb-framework.wm.r.appspot.com';
  // rootURL = "http://localhost:8080";
  getCurrentPlaying() {
    let currentPlayingURL = this.rootURL + '/current/movie';
    // let currentPlayingURL = 'http://127.0.0.1:8080/current/movie';
    // let currentPlayingURL = 'https://jsonplaceholder.typicode.com/posts/1';
    return this.http.get(currentPlayingURL);
  }
  getPopMovie() {
    let popMovieURL = this.rootURL + '/pop/movie';
    return this.http.get(popMovieURL);
  }
  getTopMovie() {
    let topMovieURL = this.rootURL + '/top/movie';
    return this.http.get(topMovieURL);
  }
  getTrendMovie() {
    let trendMovie = this.rootURL + '/trend/movie';
    return this.http.get(trendMovie);
  }
  getPopTv() {
    let popTvURL = this.rootURL + '/pop/tv';
    return this.http.get(popTvURL);
  }
  getTopTv() {
    let topTvURL = this.rootURL + '/top/tv';
    return this.http.get(topTvURL);
  }
  getTrendTv() {
    let trendTv = this.rootURL + '/trend/tv';
    return this.http.get(trendTv);
  }

  constructor(
    private http: HttpClient
  ) { }
}
