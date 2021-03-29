import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-carousel-pause',
  templateUrl: './carousel-pause.component.html',
  styleUrls: ['./carousel-pause.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselPauseComponent implements OnInit, OnChanges {
  @Input() messageReceived: String = "Default message from carousel-pause";
  // public currentPlayings: object = {};
  public currentPlayings: any; // TODO: why object doesn't work?

  breakpoint: any;
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  showNavigationArrows: boolean = true;
  showNavigationIndicators: boolean = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  // constructor(private carouselService: CarouselService, config: NgbCarouselConfig) {
  //   config.showNavigationArrows = true;
  //   config.showNavigationIndicators = true;
  // }
  constructor(
    private carouselService: CarouselService,
    // private breakpointService: BreakpointService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');

  }

  ngOnInit(): void {
    this.fetchCarousel();
    this.breakpointObserver.observe([
      Breakpoints.XSmall, // max-width equals 599.99px
      Breakpoints.Small, // min-width equals 600px and max-width equals 959.99px
      Breakpoints.Medium, // min-width equals 960px and max-width equals 1279.99px
      Breakpoints.Large, // min-width equals 1280px and max-width equals 1919.99px
      Breakpoints.XLarge // min-width equals 1920px
    ]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        console.log('Matches XSmall viewport');
        //  this.htmlStyles = "dummy1";
        this.showNavigationIndicators = false;
        // document.getElementById('my-watch').className = "hold-div";
        
      }
      if (state.breakpoints[Breakpoints.Small]) {
        console.log('Matches Small viewport');
        this.showNavigationIndicators = true;
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        console.log('Matches Medium  viewport');
        this.showNavigationIndicators = true; // TODO: change it to false?
      }
      if (state.breakpoints[Breakpoints.Large]) {
        console.log('Matches Large viewport');
        this.showNavigationIndicators = true;
      }
      if (state.breakpoints[Breakpoints.XLarge]) {
        console.log('Matches XLarge viewport');
        this.showNavigationIndicators = true;
      }
    })
  }

  fetchCarousel() {
    this.carouselService.getCurrentPlaying().subscribe(result => {
      // console.log(result)
      this.currentPlayings = result['results'];
    });
  }

  // fetchBreakpoints() {
  //   this.breakpointService.getBreakpoint().subscribe(result => {
  //     this.breakpoint = result
  //     console.log(this.breakpoint)
  //   })
  // }

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
