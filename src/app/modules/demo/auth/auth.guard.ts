import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild,
  CanLoad,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('Auth guard!');

    if (this.authService.isLoggedIn) {
      return true;
    }

    this.router.navigate(['/demo/login']);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('Auth guard canActivateChild.');
    return true;
  }

  canLoad(
    route: import('@angular/router').Route,
    segments: import('@angular/router').UrlSegment[],
  ): boolean | Observable<boolean> | Promise<boolean> {
    console.log('Auth guard canLoad.');
    if (this.authService.isLoggedIn) {
      return true;
    }

    this.router.navigate(['/demo/login']);
  }
}
