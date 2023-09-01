import PacifistaShopCategoryDTO from "../../categories/dtos/PacifistaShopCategoryDTO";
import {ApiDTO} from "../../../../../core/dtos/api-dto";

export class PacifistaShopArticleDTO extends ApiDTO {
  category?: PacifistaShopCategoryDTO;
  name?: string;
  description?: string;
  htmlDescription?: string;
  logoUrl?: string;
  price?: number;
}
