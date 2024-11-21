import {ApiDTO} from "../../../../core/dtos/api-dto";
import {PacifistaNewsDTO} from "./news/PacifistaNewsDTO";

export abstract class PacifistaNewsUserDataDTO extends ApiDTO {

    /**
     * La news à laquelle ce commentaire répond
     */
    news: PacifistaNewsDTO

    /**
     * Nom d'utilisateur Minecraft du joueur
     */
    minecraftUsername: string

    /**
     * UUID du compte ID sur la funixproductions api
     */
    funixProdUserId: string

    protected constructor(news: PacifistaNewsDTO) {
        super();
        this.news = news;
        this.minecraftUsername = "";
        this.funixProdUserId = "";
    }

}