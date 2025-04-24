import {ApiDTO} from "../../../core/dtos/api-dto";

export class PaypalPlanDTO extends ApiDTO {
    /**
     * The plan id de paypal
     */
    planId?: string;

    /**
     * The subscription name.
     */
    name: string;

    /**
     * The subscription description
     */
    description: string;

    /**
     * The image URL for the product.
     */
    imageUrl: string;

    /**
     * The home page URL for the product.
     */
    homeUrl: string;

    /**
     * The subscription price. HT Hors taxes
     */
    price: number;

    /**
     * Le nom du projet auquel est associé le plan, exemple pacifista pour un pacifista+
     */
    projectName: string;

    constructor(
        name: string,
        description: string,
        imageUrl: string,
        homeUrl: string,
        price: number,
        projectName: string,
        planId?: string
    ) {
        super();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.homeUrl = homeUrl;
        this.price = price;
        this.projectName = projectName;
        this.planId = planId;
    }

    equals(other: PaypalPlanDTO): boolean {
        return (
            this.name === other.name &&
            this.description === other.description &&
            this.imageUrl === other.imageUrl &&
            this.homeUrl === other.homeUrl &&
            this.price === other.price &&
            this.projectName === other.projectName &&
            (this.planId ? this.planId === other.planId : true)
        );
    }
}