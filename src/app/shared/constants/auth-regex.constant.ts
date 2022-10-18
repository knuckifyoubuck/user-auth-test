import { AuthRegex } from "../interfaces/auth-regex.interface";

export const authRegex: AuthRegex = {
  email: new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
  country: new RegExp('^[a-zA-Z ]*$'),
  phone: new RegExp(new RegExp('^[0-9]{0,15}$')),
}
