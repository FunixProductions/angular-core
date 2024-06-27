import {PacifistaServerType} from "../../../../core/enums/PacifistaServerType";
import {MinecraftPlayerDataDTO} from "../../../../core/dtos/MinecraftPlayerDataDTO";

export class PacifistaPlayerChatMessageDTO extends MinecraftPlayerDataDTO {
  message?: string
  serverType?: PacifistaServerType
  isCommand?: boolean
}
