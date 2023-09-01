import {UserDTO} from "./user-dto";
import {ApiDTO} from "../../../core/dtos/api-dto";

export class UserTokenDTO extends ApiDTO {
  user?: UserDTO;
  token?: string;
  expirationDate?: Date
}
