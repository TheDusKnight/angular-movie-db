import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-pause',
  templateUrl: './carousel-pause.component.html',
  styleUrls: ['./carousel-pause.component.css']
})
export class CarouselPauseComponent implements OnInit {
  @Input() messageReceived:String = "Default message"

  constructor() { }

  ngOnInit(): void {
  }

}
