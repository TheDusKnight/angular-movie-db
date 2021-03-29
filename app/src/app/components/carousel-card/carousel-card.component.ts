import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css'],
  providers: [NgbCarouselConfig],
})
export class CarouselCardComponent implements OnInit {
  public small:boolean = false;
  public cards: any;

  showNavigationArrows: boolean = true;
  showNavigationIndicators: boolean = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private carouselService: CarouselService,
    ) { }

  ngOnInit(): void {
    this.fetchCarousel();
    this.breakpointObserver.observe([
      Breakpoints.XSmall
    ]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        console.log('Matches X small viewport')
        this.small = true;
      }
    })
  }

  fetchCarousel(){
    this.carouselService.getPopMovie().subscribe(result => {
      this.cards = result['results'];
    });
  }


}
