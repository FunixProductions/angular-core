import {ApiDTO} from "../../../../../core/dtos/api-dto";

export class PacifistaNewsBanDTO extends ApiDTO {

    /**
     * La raison du ban
     */
    reason?: string

    /**
     * Nom d'utilisateur Minecraft du joueur banni
     */
    minecraftUserNameBanned: string

    /**
     * Le UUID du compte
     */
    funixProdUserIdBanned: string

    /**
     * Pseudo Minecraft de la personne qui sanctionne le joueur
     */
    staffMinecraftUserName: string

    /**
     * UUID funix prod account
     */
    staffFunixProdUserId: string

    constructor(funixProdUserIdBanned: string, minecraftUserNameBanned: string, reason?: string) {
        super();
        this.minecraftUserNameBanned = minecraftUserNameBanned;
        this.funixProdUserIdBanned = funixProdUserIdBanned;
        this.reason = reason;
        
        this.staffFunixProdUserId = '';
        this.staffMinecraftUserName = '';
    }

}