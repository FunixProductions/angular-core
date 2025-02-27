import {ApiDTO} from 'projects/funixproductions-requests/src/public-api';

export class PacifistaPlayerDataDTO extends ApiDTO {
    public minecraftUuid: string;

    constructor(minecraftUuid: string) {
        super();
        this.minecraftUuid = minecraftUuid;
    }
}
