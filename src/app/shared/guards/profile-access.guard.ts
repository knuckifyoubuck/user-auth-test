import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { MockAuthorizationService } from "../services/mock-authorization.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileAccessGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.authorizationService.getIsAuthenticated()) {
      this.router.navigate(['auth']);
      return false;
    }
    return true;
  }

  constructor(private authorizationService: MockAuthorizationService, private router: Router) {
  }

}
