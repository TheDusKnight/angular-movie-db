import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() displayTitle: boolean = false;
  @Input() cardInfo: any = {"id": 527774, "name": "Raya and the Last Dragon", "poster_path": "https://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg"};

  constructor() { }

  ngOnInit(): void {
  }

}
