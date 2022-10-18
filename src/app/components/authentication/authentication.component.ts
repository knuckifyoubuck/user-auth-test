import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { MobileBreakpoint } from "../../shared/services/mobile-breakpoint.service";
import { MockAuthorizationService } from "../../shared/services/mock-authorization.service";
import { authRegex } from "../../shared/constants/auth-regex.constant";
import { MockProfileService } from "../../shared/services/mock-profile.service";
import { AuthForms } from "../../shared/interfaces/auth-forms.interface";
import { FormControls } from "../../shared/interfaces/form-controls.interface";
import { Profile } from "../../shared/interfaces/profile.interface";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  profileData = this.profileService.getProfileData();

  mobileBreakpoint$: Observable<boolean> = this.mobileBreakpointService.isMobileScreen$;
  isAuthorized = this.authorizationService.getIsAuthenticated();

  profileForm = this.fb.group({
    username: ['', [Validators.required, Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.pattern(authRegex.email)]],
    age: ['', [Validators.required, Validators.min(0), Validators.max(99)]],
    country: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(authRegex.country)]],
    phone: ['', [Validators.required, Validators.pattern(authRegex.phone)]],
  });

  get profileFormControls(): FormControls<AuthForms> {
    return this.profileForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private mobileBreakpointService: MobileBreakpoint,
    private authorizationService: MockAuthorizationService,
    private profileService: MockProfileService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.isAuthorized) {
      this.profileForm.patchValue(this.profileData);
    }
  }

  onSubmit(): void {
    this.authorizationService.setIsAuthenticated(true);
    this.profileService.setProfileData(this.profileForm.value as Profile);

    this.router.navigate(['profile']);
  }

  onReturnToProfile(): void {
    this.router.navigate(['profile']);
  }

}
