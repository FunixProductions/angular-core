import {PaypalPlanDTO} from "./PaypalPlanDTO";
import {ApiDTO} from "../../../core/dtos/api-dto";

export class PaypalSubscriptionDTO extends ApiDTO {
    /**
     * Le plan, pour lequel l'abonnement est créé. Doit au moins contenir l'id et le planId du plan pour la création.
     */
    plan!: PaypalPlanDTO;

    /**
     * L'id de l'abonnement par PayPal
     */
    subscriptionId?: string;

    /**
     * L'id utilisateur de la funixproductions
     */
    funixProdUserId!: string;

    /**
     * Si l'abonnement est actif ou non. (pause ou pas)
     */
    active!: boolean;

    /**
     * Le nombre de cycles d'abonnement terminés
     */
    cyclesCompleted!: number;

    /**
     * La date du dernier paiement
     */
    lastPaymentDate?: Date;

    /**
     * La date du prochain paiement
     */
    nextPaymentDate?: Date;

    /**
     * Le lien pour approuver l'abonnement
     */
    approveLink?: string;
}