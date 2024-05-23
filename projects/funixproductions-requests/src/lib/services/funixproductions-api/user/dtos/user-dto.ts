import {ApiDTO} from "../../../core/dtos/api-dto";

export enum UserRole {
  USER = "USER",
  MODERATOR = "MODERATOR",
  PACIFISTA_MODERATOR = "PACIFISTA_MODERATOR",
  PACIFISTA_ADMIN = "PACIFISTA_ADMIN",
  ADMIN = "ADMIN"
}

export class UserDTO extends ApiDTO {
  username: string;
  email: string;
  role: UserRole
  valid: boolean;
  country: UserCountry;

  constructor(username: string,
              email: string,
              role: UserRole,
              valid: boolean,
              country: UserCountry) {
    super();
    this.username = username;
    this.email = email;
    this.role = role;
    this.valid = valid;
    this.country = country;
  }
}

export class UserCountry {
  name: string;
  code: number;
  countryCode2Chars: string;
  countryCode3Chars: string;

  constructor(name: string = 'France',
              code: number = 250,
              countryCode2Chars: string = 'FR',
              countryCode3Chars: string = 'FRA') {
    this.name = name;
    this.code = code;
    this.countryCode2Chars = countryCode2Chars;
    this.countryCode3Chars = countryCode3Chars;
  }
}
