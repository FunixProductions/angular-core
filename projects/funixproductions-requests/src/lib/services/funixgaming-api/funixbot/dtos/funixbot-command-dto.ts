import {FunixbotCommandType} from "../enums/funixbot-command-type";
import {ApiDTO} from "../../../core/dtos/api-dto";

export class FunixbotCommandDto extends ApiDTO {
  command: string = '';
  message: string = '';
  type: FunixbotCommandType = FunixbotCommandType.OTHER;
}
