export type FormRegex<T extends string> = {
  [key in T]: RegExp
}
