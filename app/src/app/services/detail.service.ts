import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DetailService {
  host = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getVideo(type: string, id: string) {
    let videoURL = this.host + type + '/video/' + id;
    return this.http.get(videoURL)
  }

}
