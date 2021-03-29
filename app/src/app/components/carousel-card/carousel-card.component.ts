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
  public small: boolean = true;
  public cards: any;
  public groupCards: any;

  showNavigationArrows: boolean = true;
  showNavigationIndicators: boolean = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private carouselService: CarouselService,
  ) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall
    ]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        console.log('Matches X small viewport')
        this.small = true;
      } else {
        this.small = false;
      }
    })
    this.fetchCarousel();
  }

  fetchCarousel() {
    this.carouselService.getPopMovie().subscribe(result => {
      this.cards = result['results'];
      // this.cards = result['results'].slice(0,5);
      var length = this.cards.length;
      if (length <= 6) {
        this.showNavigationArrows = false;
        // this.showNavigationArrows = this.small ? true : false;
        this.showNavigationIndicators = false;
      } else {
        this.showNavigationArrows = true;
        this.showNavigationIndicators = true;
      }

      this.groupCards = [];
      var j =  -1;
      for (var i = 0; i < length; i++) {
        if (i % 6 == 0) {
          j++;
          this.groupCards[j] = [];
          this.groupCards[j].push(this.cards[i]);
        } else {
          this.groupCards[j].push(this.cards[i]);
        }
      }
    });
  }


}
