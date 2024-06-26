import {ApiDTO} from "../../../../../core/dtos/api-dto";
import {PacifistaShopCategoryDTO} from "../../categories/dtos/PacifistaShopCategoryDTO";
import {PacifistaServerType} from "../../../../core/enums/PacifistaServerType";

export class PacifistaShopArticleDTO extends ApiDTO {
    category?: PacifistaShopCategoryDTO;
    name?: string;
    description?: string;
    htmlDescription?: string;
    price?: number;
    tax?: number;
    priceWithTax?: number;
    commandExecuted?: string;
    serverType?: PacifistaServerType;
}
