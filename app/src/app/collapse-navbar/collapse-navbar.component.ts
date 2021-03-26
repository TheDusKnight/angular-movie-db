import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-navbar',
  templateUrl: './collapse-navbar.component.html',
  styleUrls: ['./collapse-navbar.component.css']
})
export class CollapseNavbarComponent implements OnInit {
  // Step 1:
  // Create a property to track whether the menu is open.
  // Start with the menu collapsed so that it does not
  // appear initially when the page loads on a small screen!
  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
