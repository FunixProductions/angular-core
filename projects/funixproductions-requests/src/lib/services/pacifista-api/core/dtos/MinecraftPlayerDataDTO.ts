import {ApiDTO} from "../../../core/dtos/api-dto";

export abstract class MinecraftPlayerDataDTO extends ApiDTO {

    public minecraftUuid?: string;

    public minecraftUsername?: string;

}
