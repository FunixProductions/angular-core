import {ApiDTO} from 'projects/funixproductions-requests/src/public-api';

export class PlayerDataDTO extends ApiDTO {
    public minecraftUuid: string;

    constructor(minecraftUuid: string) {
        super();
        this.minecraftUuid = minecraftUuid;
    }
}
