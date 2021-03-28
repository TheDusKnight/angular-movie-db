import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakpoint',
  templateUrl: './breakpoint.component.html',
  styleUrls: ['./breakpoint.component.css']
})
export class BreakpointComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver) { }

  public smallCarousel: boolean = false;

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
         console.log( 'Matches XSmall viewport');
        //  this.htmlStyles = "dummy1";
        this.smallCarousel = true;
      }
      if (state.breakpoints[Breakpoints.Small]) {
         console.log( 'Matches Small viewport');
      }
      if (state.breakpoints[Breakpoints.Medium]) {
         console.log( 'Matches Medium  viewport');
      }
      if (state.breakpoints[Breakpoints.Large]) {

        console.log( 'Matches Large viewport');
      }
      if (state.breakpoints[Breakpoints.XLarge]) {

         console.log( 'Matches XLarge viewport');   
      }
    });
  }
}
