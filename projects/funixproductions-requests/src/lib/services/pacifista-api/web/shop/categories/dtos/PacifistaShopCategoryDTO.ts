import {ApiDTO} from "../../../../../core/dtos/api-dto";

export class PacifistaShopCategoryDTO extends ApiDTO {
    name?: string;
    description?: string;
    multiPurchaseAllowed?: boolean;
}
