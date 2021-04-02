import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylistpage',
  templateUrl: './mylistpage.component.html',
  styleUrls: ['./mylistpage.component.css']
})
export class MylistpageComponent implements OnInit {
  public watchList: any;
  public cards: any;

  constructor(
  ) { }

  ngOnInit(): void {
    this.watchList = JSON.parse(localStorage.getItem('watchList')) || [];
    if (this.watchList.length > 0) {
      this.cards = []
      for (var i = 0; i < this.watchList.length; i++) {
        this.cards.push(JSON.parse(localStorage.getItem(this.watchList[i])))
      }
    } else {
      this.watchList = null;
    }
  }

}
