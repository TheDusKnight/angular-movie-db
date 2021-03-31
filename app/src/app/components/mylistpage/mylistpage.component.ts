import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylistpage',
  templateUrl: './mylistpage.component.html',
  styleUrls: ['./mylistpage.component.css']
})
export class MylistpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var watchList = localStorage.getItem('watchList') || [];
    if (watchList.length > 0) {

    } else {
      watchList = null;
    }
  }

}
