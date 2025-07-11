import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const currentUser: User = this.authenticationService.currentUserValue;

    if (currentUser && currentUser.userRole) {
      const allowedRoles = route.data['roles'] as Array<string>;
      const userRole = currentUser.userRole;

      if (allowedRoles && !allowedRoles.includes(userRole)) {
        this.router.navigate(['/badcred']);
        return false;
      }
      return true;
    }
    console.log("AuthGuard check - currentUser:", currentUser);

    // No user found
    this.router.navigate(['/login']);
    return false;
  }
}
