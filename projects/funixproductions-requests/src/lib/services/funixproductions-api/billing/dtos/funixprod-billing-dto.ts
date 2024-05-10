import {ApiDTO} from "../../../core/dtos/api-dto";

export class FunixprodBillingDto extends ApiDTO {
    billingDescription: string = '';
    paymentType: PaymentType = PaymentType.PAYPAL
    billedEntity: BilledEntity = new BilledEntity()
    paymentOrigin: PaymentOrigin = PaymentOrigin.OTHER
    amountTotal: Price = new Price()
    vatInformation?: string
}

export enum PaymentType {
    PAYPAL = "PAYPAL",
    CREDIT_CARD = "CREDIT_CARD",
    PAYSAFE_CARD = "PAYSAFE_CARD"
}

export enum PaymentOrigin {
    PACIFISTA = "PACIFISTA",
    FUNIXGAMING = "FUNIXGAMING",
    OTHER = "OTHER"
}

export class BilledEntity {
    name: string = ''
    address?: string
    zipCode?: string
    city?: string
    phone?: string
    email: string = ''
    website?: string
    siret?: string
    tvaCode?: string
    userFunixProdId?: string
}

export class Price {
    ht: number = 0
    tax: number = 0
    ttc: number = 0
    discount?: number
}