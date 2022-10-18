import { AbstractControl } from "@angular/forms";

export type FormControls<T extends string> = { [key in T]: AbstractControl };
