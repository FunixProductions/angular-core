import {ApiDTO} from "../../../core/dtos/api-dto";

export class FunixbotAutomessageDto extends ApiDTO {
  message?: string = '';
  gameName?: string = '';
  isAnnounced: boolean = false;
}
