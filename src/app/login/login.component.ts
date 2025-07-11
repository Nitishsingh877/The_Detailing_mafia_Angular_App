import { Component, OnInit } from "@angular/core";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { User } from "../models/User";
import { AuthenticationService } from "../services/authentication.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  lock = faLockOpen;
  user: User = new User();
  errorMessage: string = '';
  userRole: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser?.userRole) {
      this.userRole = currentUser.userRole;
      console.log('Existing role:', this.userRole);
      this.redirectBasedOnRole(this.userRole);
    }
  }

  login(): void {
    this.authenticationService.login(this.user).subscribe(
      (data) => {
        console.log('Login response:', data);

        const userRole = data.user?.userRole;

        if (!userRole) {
          this.errorMessage = 'No role found. Please contact support.';
          return;
        }

        Swal.fire('Login Successful', 'You are logged in as ' + userRole, 'success')

        console.log("Confirmed, redirecting...");
          this.redirectBasedOnRole(userRole);
      
      },
      (err) => {
        console.error('Login error', err);
        alert(err.error?.message || 'Login failed. Please try again.');
      }
    );
  }

  private redirectBasedOnRole(role: string): void {
    console.log("Redirecting based on role:", role);
    switch (role) {
      case 'ADMIN':
        this.router.navigate(['/admin/completed']);
        break;
      case 'WASHER':
        this.router.navigate(['/washer/notAssigned']);
        break;
      case 'CUSTOMER':
        this.router.navigate(['/user']);
        break;
      default:
        this.errorMessage = 'Unknown role: ' + role;
        console.warn('Unhandled role:', role);
        break;
    }
  }
  
  
  
}
