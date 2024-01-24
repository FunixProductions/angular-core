import {jwtDecode} from "jwt-decode";

export class UserJwtCheckerService {

  public parseJwt(token: string): any {
    try {
      const decoded = jwtDecode(token);
      console.log(decoded);
    } catch (e) {
      return null;
    }
  }

}
