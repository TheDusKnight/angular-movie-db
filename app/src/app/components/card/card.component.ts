import { Component, Input, OnInit } from '@angular/core';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  displayTitle: boolean = false;
  @Input() cardInfo: any = {};
  device: string;

  constructor(
    private breakpointService: BreakpointService,
  ) { }

  ngOnInit(): void {
    // console.log(window.screen.width)
    // if (window.screen.width < 600) {
    //   this.displayTitle = true;
    // }
    // this.breakpointService.getBreakpoint().subscribe(result => this.device = result);
  }

}
