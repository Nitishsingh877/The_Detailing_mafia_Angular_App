import { Component, OnInit } from '@angular/core';
  import {
    faHome,
    faShoppingBag,
    faPlus,
    faInfoCircle,
    faPhoneSquareAlt,
    faQuestionCircle,
    faBoxOpen
  } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-washer-sidebar',
  templateUrl: './washer-sidebar.component.html',
  styleUrls: ['./washer-sidebar.component.css']
})
export class WasherSidebarComponent implements OnInit {
  home = faHome;
  shoppingbag = faShoppingBag;
  plus = faPlus;
  info = faInfoCircle;
  phone = faPhoneSquareAlt;
  un=faQuestionCircle;
  box=faBoxOpen;
  constructor() { }

  ngOnInit(): void {
  }

}
