import { Component, OnInit } from '@angular/core';
import { BreakpointService } from '../../services/breakpoint.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public message: string = "Passing the message from homepage";
  public device: string;

  constructor(private breakpointService: BreakpointService) { }

  ngOnInit(): void {
    // this.breakpoint.currentMessage.subscribe(breakpoint => this.device = breakpoint);
    this.breakpointService.getBreakpoint().subscribe(result => this.device = result);
  }

}
