import { Component, OnInit } from '@angular/core';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faDotCircle,
} from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  mobile = faPhone;
  dot=faDotCircle;
  envelope = faEnvelope;
  marker = faMapMarkerAlt;
  constructor() {}

  ngOnInit(): void {}
}
