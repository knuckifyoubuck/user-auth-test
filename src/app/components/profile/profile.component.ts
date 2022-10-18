import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

import { MockAuthorizationService } from "../../shared/services/mock-authorization.service";
import { MobileBreakpoint } from "../../shared/services/mobile-breakpoint.service";
import { MockProfileService } from "../../shared/services/mock-profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  profileData = this.profileService.getProfileData();
  mobileBreakpoint$: Observable<boolean> = this.mobileBreakpointService.isMobileScreen$;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authorizationService: MockAuthorizationService,
    private profileService: MockProfileService,
    private mobileBreakpointService: MobileBreakpoint,
  ) { }

  onUpdate() {
    this.router.navigate(['auth']);
  }

}
