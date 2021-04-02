import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointService } from '../../services/breakpoint.service';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css'],
  providers: [NgbCarouselConfig],
})
export class CarouselCardComponent implements OnInit {
  public device: string;
  public small: boolean = true;
  public cards: any;
  public groupCards: any;
  public title: string;
  @Input() public data: any = 'hello test';

  showNavigationArrows: boolean = true;
  showNavigationIndicators: boolean = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private carouselService: CarouselService,
    private breakpointService: BreakpointService,
  ) { }

  ngOnInit(): void {
    this.breakpointService.getBreakpoint().subscribe(result => {
      this.device = result;      
    });
  }
  ngOnChanges(changes: SimpleChanges): void { // service changes async
    if (this.data) { // changes['data']?
      this.cards = this.data;
      var length = this.cards.length;
      if (length <= 6) {
        this.showNavigationArrows = false;
        this.showNavigationIndicators = false;
      } else {
        this.showNavigationArrows = true;
        this.showNavigationIndicators = true;
      }

      this.groupCards = [];
      var j = -1;
      for (var i = 0; i < length; i++) {
        if (i % 6 == 0) {
          j++;
          this.groupCards[j] = [];
          this.groupCards[j].push(this.cards[i]);
        } else {
          this.groupCards[j].push(this.cards[i]);
        }
      }
    }
  }
}
