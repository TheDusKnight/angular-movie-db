import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver) {}

  public title: string = "HELLO WORLD!"
  smallCarousel: string; // ???

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall, // portrait phones, less than 576px
      Breakpoints.Small, // landscape phones, 576px and up
      Breakpoints.Medium, // tablets, 768px and up
      Breakpoints.Large, // desktops, 992px and up
      Breakpoints.XLarge // large desktops, 1200px and up
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
          //  console.log( 'Matches XSmall viewport');
          //  this.htmlStyles = "dummy1";
      }
      if (state.breakpoints[Breakpoints.Small]) {
          //  console.log( 'Matches Small viewport');
      }
      if (state.breakpoints[Breakpoints.Medium]) {
          //  console.log( 'Matches Medium  viewport');
      }
      if (state.breakpoints[Breakpoints.Large]) {

          // console.log( 'Matches Large viewport');
      }
      if (state.breakpoints[Breakpoints.XLarge]) {

        //  console.log( 'Matches XLarge viewport');   
      }
    });
  }
}