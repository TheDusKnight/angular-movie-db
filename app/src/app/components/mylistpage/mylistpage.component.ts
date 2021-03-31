import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylistpage',
  templateUrl: './mylistpage.component.html',
  styleUrls: ['./mylistpage.component.css']
})
export class MylistpageComponent implements OnInit {
  public watchList: any = null;
  public items: any;

  constructor(
  ) { }

  ngOnInit(): void {
    var watchList = localStorage.getItem('watchList') || [];
    if (watchList.length > 0) {
      // console.log(watchList.length)

    } else {
      watchList = null;
    }
  }

}
