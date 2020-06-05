import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss']
})
export class LayoutPageComponent implements OnInit {

  constructor() { }

  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = false;
  showSubmenu = false;
  isShowing = false;
  showSubSubMenu = false;

  expandCart = false;

  ngOnInit(): void {}

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  onCartClick() {
    this.expandCart = !this.expandCart;
  }

}
