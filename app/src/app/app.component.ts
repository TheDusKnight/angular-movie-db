import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  public title: string = "HELLO WORLD!"

  ngOnInit() {
  }
  onActive(event) {
    window.scroll(0,0);
    console.log("active");
  }
  onDeactive() {
    console.log("deactive");
  }
}