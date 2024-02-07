import {jwtDecode, JwtPayload} from "jwt-decode";
import {UserSessionJwt} from "../dtos/user-session-jwt";
import {UserDTO, UserRole} from "../dtos/user-dto";
import {FunixprodHttpClient} from "../../../core/components/requests/funixprod-http-client";

export class UserJwtCheckerService {

  public hasRole(role: UserRole): boolean {
    const token: UserSessionJwt | null = this.getTokenFromLocalStorage();

    if (token) {
      return token.role === role;
    } else {
      return false;
    }
  }

  public getUser(): UserDTO | null {
    const token: UserSessionJwt | null = this.getTokenFromLocalStorage();

    if (token) {
      return token.user;
    } else {
      return null;
    }
  }

  private getTokenFromLocalStorage(): UserSessionJwt | null {
    const token: string | null = localStorage.getItem(FunixprodHttpClient.accessTokenLocalStorageName);

    if (token) {
      const jwt = this.parseJwt(token);

      if (jwt == null || jwt.expirationAt < Date.now() / 1000) {
        return null;
      } else {
        return jwt;
      }
    } else {
      return null;
    }
  }

  private parseJwt(token: string): UserSessionJwt | null {
    try {
      const decoded: FunixProdJwtToken = jwtDecode(token);

      if (decoded.user && decoded.iat && decoded.exp) {
        const user: UserDTO = decoded.user;

        return new UserSessionJwt(
          decoded.iat,
          decoded.exp,
          user.role ?? UserRole.USER,
          user
        );
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

}

class FunixProdJwtToken implements JwtPayload {
  iss?: string;
  sub?: string;
  aud?: string[] | string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  user?: UserDTO;
}
