import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css'],
  providers: [NgbCarouselConfig],
})
export class CarouselCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() which: string = '';


}
