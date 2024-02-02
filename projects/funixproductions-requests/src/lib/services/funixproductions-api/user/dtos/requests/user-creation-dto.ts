import {ApiDTO} from "../../../../core/dtos/api-dto";
import {UserCountry} from "../user-dto";

export class UserCreationDTO extends ApiDTO {
  username: string = '';
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  acceptCGV: boolean = false;
  acceptCGU: boolean = false;
  country: UserCountry = new UserCountry();
}
