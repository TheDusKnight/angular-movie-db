import { Component, OnInit } from '@angular/core';
import { BreakpointService } from '../../services/breakpoint.service';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public message: string = "Passing the message from homepage";
  public device: string; // display device size
  public continueWatch: any;
  public popMovie: any;
  public topMovie: any;
  public trendMovie: any;
  public popTv: any;
  public topTv: any;
  public trendTv: any;

  constructor(
    private breakpointService: BreakpointService,
    private carouselService: CarouselService,
    ) { }

  ngOnInit(): void {
    // Fetch continue watch list from local storage
    this.continueWatch = [];
    var orderList = JSON.parse(localStorage.getItem('orderList')) || [];
    if (orderList.length > 0) {
      this.continueWatch = [];
      var i;
      for (i in orderList) {
        this.continueWatch.push(JSON.parse(localStorage.getItem(orderList[i])));
      }
    } else {
      this.continueWatch = null;
    }
    this.breakpointService.getBreakpoint().subscribe(result => this.device = result);
    this.carouselService.getPopMovie().subscribe(result => this.popMovie = result['results']);
    this.carouselService.getTopMovie().subscribe(result => this.topMovie = result['results']);
    this.carouselService.getTrendMovie().subscribe(result => this.trendMovie = result['results']);
    this.carouselService.getPopTv().subscribe(result => this.popTv = result['results']);
    this.carouselService.getTopTv().subscribe(result => this.topTv = result['results']);
    this.carouselService.getTrendTv().subscribe(result => this.trendTv = result['results']);
  }
}

function getContinueWatch() {
  this.continueWatch = [];
}