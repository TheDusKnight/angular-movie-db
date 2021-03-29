import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  data = {}
  host = 'http://localhost:8080/';
  getCurrentPlaying() {
    let currentPlayingURL = this.host + 'current/movie';
    // let currentPlayingURL = 'http://127.0.0.1:8080/current/movie';
    // let currentPlayingURL = 'https://jsonplaceholder.typicode.com/posts/1';
    return this.http.get(currentPlayingURL);
  }
  getPopMovie() {
    let popMovieURL = this.host + 'pop/movie';
    return this.http.get(popMovieURL);
  }

  constructor(
    private http: HttpClient
  ) { }
}
