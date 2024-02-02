import {ApiDTO} from "../../../core/dtos/api-dto";

export enum UserRole {
  USER = "USER",
  MODERATOR = "MODERATOR",
  PACIFISTA_MODERATOR = "PACIFISTA_MODERATOR",
  PACIFISTA_ADMIN = "PACIFISTA_ADMIN",
  ADMIN = "ADMIN"
}

export class UserDTO extends ApiDTO {
  username: string = '';
  email: string = '';
  role?: UserRole
  valid: boolean = true;
  country: UserCountry = new UserCountry();
}

export class UserCountry {
  name: string = 'France';
  code: number = 250;
  countryCode2Chars: string = 'FR';
  countryCode3Chars: string = 'FRA';
}