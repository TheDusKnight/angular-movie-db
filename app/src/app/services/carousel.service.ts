import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  data = {}
  getCurrentPlaying() {
    let currentPlayingURL = 'http://localhost:8080/current/movie';
    // let currentPlayingURL = 'http://127.0.0.1:8080/current/movie';
    // let currentPlayingURL = 'https://jsonplaceholder.typicode.com/posts/1';
    return this.http.get(currentPlayingURL);
  }

  constructor(
    private http: HttpClient
  ) { }
}
