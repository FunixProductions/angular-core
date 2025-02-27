import {PlayerDataDTO} from './PlayerDataDTO';

export class PlayerMoneyDTO extends PlayerDataDTO {
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
