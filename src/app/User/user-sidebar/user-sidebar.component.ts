import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faShoppingBag,
  faPlus,
  faInfoCircle,
  faPhoneSquareAlt,
  faBoxOpen
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css'],
})
export class UserSidebarComponent implements OnInit {
  home = faHome;
  shoppingbag = faShoppingBag;
  plus = faPlus;
  info = faInfoCircle;
  phone = faPhoneSquareAlt;
  box=faBoxOpen;
  constructor() {}
  
  ngOnInit(): void {}
}
