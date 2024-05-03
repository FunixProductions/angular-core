import {ApiDTO} from "../../../../core/dtos/api-dto";

export class PacifistaWebUserLinkDTO extends ApiDTO {

    funixProdUserId?: string;
    minecraftUuid?: string;
    linked?: boolean;
    linkKey?: string;

}