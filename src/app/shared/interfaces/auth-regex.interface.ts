import { FormRegex } from "./form-regex.interface";

export type AuthRegex = FormRegex<AuthRegexPatterns>

type AuthRegexPatterns = 'email' | 'country' | 'phone'
