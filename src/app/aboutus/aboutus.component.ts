import { Component, OnInit } from '@angular/core';
import {
  faHeart,
  faSignal,
  faDumbbell,
  faBriefcase,
  faCertificate,
  faCogs,
  faLeaf
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent implements OnInit {
  chartLine = faSignal;
  dumbell = faDumbbell;
  heart = faHeart;
  case = faBriefcase;
  certificate = faCertificate;
  cogs = faCogs;
  leaf=faLeaf;
  constructor() {}

  ngOnInit(): void {}
}
