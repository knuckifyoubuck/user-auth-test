import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Profile } from "../interfaces/profile.interface";
import { LocalStorageService } from "./local-storage.service";

const PROFILE_KEY = 'profileData';

@Injectable({
  providedIn: 'root'
})
export class MockProfileService {

  profileData$ = new BehaviorSubject<Profile | null>(null);

  constructor(private localStorageService: LocalStorageService) { }

  setProfileData(value: Profile) {
    this.localStorageService.setItem(PROFILE_KEY, value);
  }

  getProfileData(): Profile {
    return this.localStorageService.getItem(PROFILE_KEY);
  }

  clearProfileData() {
    this.localStorageService.removeItem(PROFILE_KEY);
  }

}
