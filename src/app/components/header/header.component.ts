import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { MobileBreakpoint } from "../../shared/services/mobile-breakpoint.service";
import { MockAuthorizationService } from "../../shared/services/mock-authorization.service";
import { MockProfileService } from "../../shared/services/mock-profile.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  mobileBreakpoint$ = this.mobileBreakpointService.isMobileScreen$;
  isAuthorized = this.authorizationService.getIsAuthenticated();

  constructor(
    private authorizationService: MockAuthorizationService,
    private profileService: MockProfileService,
    private mobileBreakpointService: MobileBreakpoint,
    private router: Router,
  ) { }

  get username() {
    return this.profileService.getProfileData()?.username;
  }

  get isAuthRouter() {
    return this.router.url === '/auth'
  }

  onSignout() {
    this.profileService.clearProfileData();
    this.authorizationService.signout();

    this.router.navigate(['auth']);
  }

}
