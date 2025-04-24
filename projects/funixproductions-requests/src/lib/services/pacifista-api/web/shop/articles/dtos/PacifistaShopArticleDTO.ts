import {ApiDTO} from "../../../../../core/dtos/api-dto";
import {PacifistaShopCategoryDTO} from "../../categories/dtos/PacifistaShopCategoryDTO";
import {PacifistaServerType} from "../../../../core/enums/PacifistaServerType";

export class PacifistaShopArticleDTO extends ApiDTO {
    category: PacifistaShopCategoryDTO;
    name: string;
    description: string;
    htmlDescription: string;
    markDownDescription: string;
    price: number;
    tax?: number;
    priceWithTax?: number;
    commandExecuted: string;
    serverType?: PacifistaServerType;

    constructor(category: PacifistaShopCategoryDTO,
                name: string,
                description: string,
                htmlDescription: string,
                markDownDescription: string,
                price: number,
                commandExecuted: string,
                serverType?: PacifistaServerType) {
        super();
        this.category = category;
        this.name = name;
        this.description = description;
        this.htmlDescription = htmlDescription;
        this.markDownDescription = markDownDescription;
        this.price = price;
        this.commandExecuted = commandExecuted;
        this.serverType = serverType;
    }
}
