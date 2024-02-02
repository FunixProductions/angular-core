
export class PacifistaPaymentRequestDTO {
    articles?: PacifistaShopArtcileRequestDTO[];
    creditCard?: PacifistaShopCreditCardDTO;
}

export class PacifistaShopArtcileRequestDTO {
    articleId?: string;
    quantity?: number;
}

export class PacifistaShopCreditCardDTO {
    cardHolderName?: string;
    cardNumber?: string;
    securityCode?: string;
    expirationMonth?: number;
    expirationYear?: number;
}
