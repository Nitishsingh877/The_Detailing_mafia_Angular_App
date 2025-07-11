import { Component, OnInit } from '@angular/core';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { User } from '../models/User';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}
  //Icons
  faReg = faAddressBook;
  //Roles
  roles = ['CUSTOMER', 'WASHER', 'ADMIN'];
  roleHasError = true;
  errorMessage: string = '';
  ngOnInit(): void {
    if (this.authenticationService.currentUserValue?.id) {
      this.router.navigate(['/home']);
    }
  }
  validateRole(value: string) {
    if (value === 'default') {
      this.roleHasError = true;
    } else {
      this.roleHasError = false;
    }
  }

  user: User = new User();
  register() {
    this.authenticationService.register(this.user).subscribe(
      (data) => {
        console.log(data);
        console.log("succesfull");
        Swal.fire({
          icon: 'success',
          title: 'Welcome To HappyCars Network',
          text: 'You are registered succesfully',
        });
        this.router.navigate(['/login']);
      },
      (err) => {
        if (err?.status === 409) {
          this.errorMessage = 'User Exists Already';
        } else {
          this.errorMessage =
            'Unexpected error occurred. Error is: ' + err?.errorMessage;
          console.log(err);
        }
      }
    );
  }
}
