import {UserDTO} from "../user-dto";

export class UserUpdateAccountDto extends UserDTO {
    oldPassword?: string;
    newPassword?: string;
    newPasswordConfirmation?: string;
}