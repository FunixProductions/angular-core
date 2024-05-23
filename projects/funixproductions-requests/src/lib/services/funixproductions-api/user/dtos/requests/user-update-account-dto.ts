import {UserCountry} from "../user-dto";

export class UserUpdateAccountDto {
    oldPassword?: string;
    newPassword?: string;
    newPasswordConfirmation?: string;
    username?: string;
    email?: string;
    country?: UserCountry;
}