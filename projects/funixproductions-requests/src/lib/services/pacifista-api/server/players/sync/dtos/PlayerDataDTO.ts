import {ApiDTO} from '../../../../../core/dtos/api-dto';

export class PlayerDataDTO extends ApiDTO {
    public minecraftUuid: string;

    constructor(minecraftUuid: string) {
        super();
        this.minecraftUuid = minecraftUuid;
    }
}
