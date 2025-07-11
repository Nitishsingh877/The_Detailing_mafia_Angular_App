import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-not-auth',
  templateUrl: './not-auth.component.html',
  styleUrls: ['./not-auth.component.css']
})
export class NotAuthComponent implements OnInit {

  constructor(private location:Location) { }
  ngOnInit(): void {
  }
  //just goes back to last page
  back(){
    this.location.back();
  }
}
