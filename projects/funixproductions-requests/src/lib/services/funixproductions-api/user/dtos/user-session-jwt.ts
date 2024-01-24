import {UserDTO, UserRole} from "./user-dto";

export class UserSessionJwt {
  generatedAt: number;
  expirationAt: number;
  role: UserRole;
  user: UserDTO;

  constructor(generatedAt: number, expirationAt: number, role: UserRole, user: UserDTO) {
    this.generatedAt = generatedAt;
    this.expirationAt = expirationAt;
    this.role = role;
    this.user = user;
  }
}
