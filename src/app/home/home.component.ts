import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faShippingFast,
  faBoxOpen,
  faTint,
  faClipboardCheck,
  faRupeeSign,
  faClock,
  faWallet,
  faChartLine,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  fastShippingIcon = faShippingFast;
  boxopenIcon = faBoxOpen;
  dropIcon = faTint;
  clipboardIcon = faClipboardCheck;
  rupeeIcon = faRupeeSign;
  clockIcon = faClock;
  walletIcon = faWallet;
  growthIcon = faChartLine;
  mobile = faPhone;
  envelope = faEnvelope;
  marker = faMapMarkerAlt;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  regis(){
    this.router.navigateByUrl('/register');
  };
}
