import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  private messageSource = new BehaviorSubject<string>('default message from BreakPointService');
  currentMessage = this.messageSource.asObservable();

  constructor(public breakpointObserver: BreakpointObserver) { }

  getBreakpoint() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall, // max-width equals 599.99px
      Breakpoints.Small, // min-width equals 600px and max-width equals 959.99px
      Breakpoints.Medium, // min-width equals 960px and max-width equals 1279.99px
      Breakpoints.Large, // min-width equals 1280px and max-width equals 1919.99px
      Breakpoints.XLarge, // min-width equals 1920px
    ]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        console.log('Matches XSmall viewport');
        this.messageSource.next('XSmall');
      }
      if (state.breakpoints[Breakpoints.Small]) {
        console.log('Matches Small viewport');
        this.messageSource.next('Small');
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        console.log('Matches Medium  viewport');
        this.messageSource.next('Medium');
      }
      if (state.breakpoints[Breakpoints.Large]) {

        console.log('Matches Large viewport');
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
