export class PacifistaPaymentRequestDTO {
    articles: PacifistaShopArtcileRequestDTO[];
    creditCard?: PacifistaShopCreditCardDTO;

    constructor(articles: PacifistaShopArtcileRequestDTO[],
                creditCard?: PacifistaShopCreditCardDTO) {
        this.articles = articles;
        this.creditCard = creditCard;
    }
}

export class PacifistaShopArtcileRequestDTO {
    articleId: string;
    quantity: number;

    constructor(articleId: string, quantity: number) {
        this.articleId = articleId;
        this.quantity = quantity;
    }
}

export class PacifistaShopCreditCardDTO {
    cardHolderName: string;
    cardNumber: string;
    securityCode: string;
    expirationMonth: number;
    expirationYear: number;

    constructor(cardHolderName: string,
                cardNumber: string,
                securityCode: string,
                expirationMonth: number,
                expirationYear: number) {
        this.cardHolderName = cardHolderName;
        this.cardNumber = cardNumber;
        this.securityCode = securityCode;
        this.expirationMonth = expirationMonth;
        this.expirationYear = expirationYear;
    }
}
