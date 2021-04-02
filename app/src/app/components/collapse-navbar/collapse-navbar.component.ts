import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  changeHide(val: boolean) {
    this.isMenuCollapsed = val;
  }
  
  route: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() === '') {
        this.route = 'Home'
        document.getElementById("home").className = "nav-item active"
        document.getElementById("list").className = "nav-item"
      } else if (location.path() === "/mylist") {
        this.route = location.path();
        document.getElementById("list").className = "nav-item active"
        document.getElementById("home").className = "nav-item"
      } else {
        this.route = location.path();
        document.getElementById("list").className = "nav-item"
        document.getElementById("home").className = "nav-item"
      }
    })
   }

  ngOnInit(): void {
  }

}

