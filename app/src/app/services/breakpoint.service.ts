import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  public breakpoint: string = ''

  constructor(public breakpointObserver: BreakpointObserver) { }

  getBreakpoint() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        console.log('Matches XSmall viewport');
        //  this.htmlStyles = "dummy1";
        this.breakpoint = "XSmall";
      }
      if (state.breakpoints[Breakpoints.Small]) {
        console.log('Matches Small viewport');
        this.breakpoint = "Small";
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        console.log('Matches Medium  viewport');
        this.breakpoint = "Medium";
      }
      if (state.breakpoints[Breakpoints.Large]) {

        console.log('Matches Large viewport');
        this.breakpoint = "Matches";
      }
      if (state.breakpoints[Breakpoints.XLarge]) {

        console.log('Matches XLarge viewport');
        this.breakpoint = "XLarge";
      }
    })
    return of(this.breakpoint);
  }


}
