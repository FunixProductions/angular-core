import {UserDTO, UserRole} from "./user-dto";

export class UserSessionJwt {
  generatedAt: number;
  expirationAt?: number;
  role: UserRole;
  user: UserDTO;

  constructor(generatedAt: number, role: UserRole, user: UserDTO, expirationAt?: number) {
    this.generatedAt = generatedAt;
    this.expirationAt = expirationAt;
    this.role = role;
    this.user = user;
  }
}
