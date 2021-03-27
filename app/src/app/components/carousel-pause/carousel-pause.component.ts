import { Component, Input, OnInit } from '@angular/core';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-carousel-pause',
  templateUrl: './carousel-pause.component.html',
  styleUrls: ['./carousel-pause.component.css']
})
export class CarouselPauseComponent implements OnInit {
  @Input() messageReceived:String = "Default message from carousel-pause";
  public currentPlayings: object = {};
  // public currentPlayings: any;

  constructor(private carouselService: CarouselService) { }

  ngOnInit(): void {
    this.fetchCarousel();
  }

  fetchCarousel() {
    this.carouselService.getCurrentPlaying().subscribe(result => {
        // console.log(result)
        this.currentPlayings = result['results'];
    });
  }

}
