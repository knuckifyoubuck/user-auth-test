import { Injectable } from '@angular/core';
import { LocalStorageService } from "./local-storage.service";

const AUTH_KEY = 'isAuthenticated'

@Injectable({
  providedIn: 'root'
})
export class MockAuthorizationService {

  constructor(private localStorageService: LocalStorageService) { }

  setIsAuthenticated(value: boolean): void {
    this.localStorageService.setItem(AUTH_KEY, value);
  }

  getIsAuthenticated(): boolean {
    return this.localStorageService.getItem(AUTH_KEY);
  }

  signout() {
    this.localStorageService.removeItem(AUTH_KEY);
  }

}
