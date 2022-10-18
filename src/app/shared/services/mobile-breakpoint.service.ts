import { map, Observable } from "rxjs";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MobileBreakpoint {

  isMobileScreen$: Observable<boolean> = this.breakpointObserver.observe([
    Breakpoints.HandsetPortrait
  ])
  .pipe(
    map(({ matches }) => matches)
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
