import {ApiDTO} from "../../../../../core/dtos/api-dto";

export class PacifistaShopCategoryDTO extends ApiDTO {
    name: string;
    description: string;
    multiPurchaseAllowed: boolean;

    constructor(name: string, description: string, multiPurchaseAllowed: boolean) {
        super();
        this.name = name;
        this.description = description;
        this.multiPurchaseAllowed = multiPurchaseAllowed;
    }
}
