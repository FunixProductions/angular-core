import {ApiDTO} from "../../../../../core/dtos/api-dto";
import {PacifistaShopCategoryDTO} from "../../categories/dtos/PacifistaShopCategoryDTO";

export class PacifistaShopArticleDTO extends ApiDTO {
    category?: PacifistaShopCategoryDTO;
    name?: string;
    description?: string;
    htmlDescription?: string;
    price?: number;
    commandExecuted?: string;
}
