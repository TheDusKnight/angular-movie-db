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
  @Input() device:string;

  constructor(
    private breakpointService: BreakpointService,
  ) { }

  ngOnInit(): void {
    // this.breakpointService.getBreakpoint().subscribe(result => {
    //   this.device = result;      
    // });
  }
  ngOnChanges() {
    console.log(this.device + "in card");
  }

}
