import {PacifistaPlayerDataDTO} from './PacifistaPlayerDataDTO';

export class PacifistaPlayerMoneyDTO extends PacifistaPlayerDataDTO {
    money: number;
    offlineMoney: number;

    constructor(money: number,
                offlineMoney: number,
                minecraftUuid: string) {
        super(minecraftUuid);
        this.money = money;
        this.offlineMoney = offlineMoney;
    }
}
