import {PacifistaServerType} from "../../../../core/enums/PacifistaServerType";
import {MinecraftPlayerDataDTO} from "../../../../core/dtos/MinecraftPlayerDataDTO";

export class PacifistaPlayerChatMessageDTO extends MinecraftPlayerDataDTO {
    message: string
    serverType: PacifistaServerType
    isCommand: boolean

    constructor(message: string,
                serverType: PacifistaServerType,
                isCommand: boolean,
                minecraftUuid: string,
                minecraftUsername: string) {
        super(minecraftUuid, minecraftUsername);
        this.message = message;
        this.serverType = serverType;
        this.isCommand = isCommand;
    }
}
