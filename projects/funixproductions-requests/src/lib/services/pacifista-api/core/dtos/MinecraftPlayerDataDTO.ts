import {ApiDTO} from "../../../core/dtos/api-dto";

export abstract class MinecraftPlayerDataDTO extends ApiDTO {

    public minecraftUuid: string;

    public minecraftUsername: string;

    constructor(minecraftUuid: string, minecraftUsername: string) {
        super();
        this.minecraftUuid = minecraftUuid;
        this.minecraftUsername = minecraftUsername;
    }

}
