import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  car = faCar;
  currentUser: User = new User();
  userRole: string = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe((data) => {
      this.currentUser = data;
      if (this.currentUser.userRole) {
        this.userRole = this.currentUser.userRole; // full role string
        console.log('Detected role:', this.userRole);
      }
    });    
  }

  ngOnInit(): void {}

  aboutus = () => this.router.navigateByUrl('/aboutus');
  contactus = () => this.router.navigateByUrl('/contact');
  gotoHome = () => this.router.navigateByUrl('/home');

  isAdmin() {
    return this.userRole === 'ADMIN';
  }
  isWasher() {
    return this.userRole === 'WASHER';
  }
  isUser() {
    return this.userRole === 'CUSTOMER';
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
  }

  properRole() {
    if (this.isAdmin()) {
      this.router.navigate(['/admin']);
    } else if (this.isWasher()) {
      this.router.navigate(['/washer']);
    } else {
      this.router.navigate(['/user']);
    }
  }
}