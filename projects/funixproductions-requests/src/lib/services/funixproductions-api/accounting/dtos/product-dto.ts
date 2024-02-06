import {ApiDTO} from "../../../core/dtos/api-dto";

/**
 * DTO utilisé pour enregistrer ce que paye la funixproductions.
 */
export class ProductDTO extends ApiDTO {
    productName?: string;
    productDescription?: string;
    monthly?: boolean;
    isEu?: boolean;
    isPhysical?: boolean;
    amountHT?: number;
    amountTax?: number;
}
