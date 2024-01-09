import {ApiDTO} from "../../../../../core/dtos/api-dto";
import {PacifistaServerType} from "../../../../core/enums/PacifistaServerType";

export class PacifistaPlayerChatMessageDTO extends ApiDTO {
  message?: string
  serverType?: PacifistaServerType
  isCommand?: boolean
}
