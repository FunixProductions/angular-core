import {ApiDTO} from "../../../../../../core/dtos/api-dto";
import {PaymentType} from "../../../../../../funixproductions-api/billing/dtos/funixprod-billing-dto";

export class PacifistaPaymentResponseDTO extends ApiDTO {
    paymentExternalOrderId?: string;
    paymentType?: PaymentType;
    orderPaid?: boolean;
    urlClientRedirection?: string;
}