import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
// import { BehaviorSubject, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  // public breakpoint: string = ''
  private messageSource = new BehaviorSubject<string>('default message!!!');
  currentMessage = this.messageSource.asObservable();

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
        // this.breakpoint = "XSmall";
        this.messageSource.next('XSmall');
      }
      if (state.breakpoints[Breakpoints.Small]) {
        console.log('Matches Small viewport');
        // this.breakpoint = "Small";
        this.messageSource.next('Small');
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        console.log('Matches Medium  viewport');
        // this.breakpoint = "Medium";
        this.messageSource.next('Medium');
      }
      if (state.breakpoints[Breakpoints.Large]) {

        console.log('Matches Large viewport');
        // this.breakpoint = "Matches";
        this.messageSource.next('Large');
      }
      if (state.breakpoints[Breakpoints.XLarge]) {

        console.log('Matches XLarge viewport');
        this.messageSource.next('XLarge');
      }
    })
    return this.currentMessage;
  }


}
