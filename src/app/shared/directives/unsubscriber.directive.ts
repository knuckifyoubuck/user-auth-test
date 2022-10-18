import { Directive, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Directive({
  selector: '[unsubscriber]'
})
export class Unsubscriber implements OnDestroy{

  public unsubscribe$ = new Subject<void>();

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
