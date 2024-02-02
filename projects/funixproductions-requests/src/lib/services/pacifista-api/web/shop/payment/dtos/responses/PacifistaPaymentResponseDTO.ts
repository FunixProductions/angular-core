import {ApiDTO} from "../../../../../../core/dtos/api-dto";

export class PacifistaPaymentResponseDTO extends ApiDTO {
    paymentExternalOrderId?: string;
    paymentType?: PaymentType;
    orderPaid?: boolean;
    urlClientRedirection?: string;
}

export enum PaymentType {
    PAYPAL = 'PAYPAL',
    CREDIT_CARD = 'CREDIT_CARD',
    PAYSAFE_CARD = 'PAYSAFE_CARD',
}
