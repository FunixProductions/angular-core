import {ApiDTO} from "../../../../core/dtos/api-dto";
import {PacifistaSanctionType} from "../enums/PacifistaSanctionType";

export class PacifistaSanctionDTO extends ApiDTO {
    playerSanctionUuid: string
    reason: string
    sanctionType: PacifistaSanctionType
    playerActionUuid?: string
    active: boolean
    expirationDate?: Date

    constructor(playerSanctionUuid: string,
                reason: string,
                sanctionType: PacifistaSanctionType,
                active: boolean = true,
                playerActionUuid?: string,
                expirationDate?: Date) {
        this.playerSanctionUuid = playerSanctionUuid
        this.reason = reason
        this.sanctionType = sanctionType
        this.playerActionUuid = playerActionUuid
        this.active = active
        this.expirationDate = expirationDate
    }

}
