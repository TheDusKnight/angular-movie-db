import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-carousel-pause',
  templateUrl: './carousel-pause.component.html',
  styleUrls: ['./carousel-pause.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselPauseComponent implements OnInit, OnChanges{
  @Input() messageReceived:String = "Default message from carousel-pause";
  // public currentPlayings: object = {};
  public currentPlayings: any; // TODO: whay object doesn't work?

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  @Input() showNavigationArrows:boolean = false;
  @Input() showNavigationIndicators:boolean = false;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  // constructor(private carouselService: CarouselService, config: NgbCarouselConfig) {
  //   config.showNavigationArrows = true;
  //   config.showNavigationIndicators = true;
  // }
  constructor(private carouselService: CarouselService) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    
  }

  ngOnInit(): void {
    this.fetchCarousel();
  }

  fetchCarousel() {
    this.carouselService.getCurrentPlaying().subscribe(result => {
        // console.log(result)
        this.currentPlayings = result['results'];
    });
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
