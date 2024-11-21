import {ApiDTO} from "../../../../../core/dtos/api-dto";

export class PacifistaNewsImageDTO extends ApiDTO {

    /**
     * Image rattachée à la news
     */
    newsUuid: string

    /**
     * Image en basse résolution pour l'affichage par liste
     */
    isLowResolution: boolean

    constructor(newsUuid: string, isLowResolution: boolean) {
        super();
        this.newsUuid = newsUuid;
        this.isLowResolution = isLowResolution;
    }

}