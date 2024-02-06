import {ApiDTO} from "../../../core/dtos/api-dto";

/**
 * DTO utilisé pour enregistrer ce que reçois la funixproductions. (paye twitch, youtube, etc...)
 * Revenus BtoB
 */
export class IncomeDto extends ApiDTO {
    incomeName?: string;
    incomeDescription?: string;
    amount?: number;
}
