import {ApiDTO} from '../../../../../core/dtos/api-dto';

export class PlayerDataDTO extends ApiDTO {
    public playerOwnerUuid: string;

    constructor(playerOwnerUuid: string) {
        super();
        this.playerOwnerUuid = playerOwnerUuid;
    }
}
