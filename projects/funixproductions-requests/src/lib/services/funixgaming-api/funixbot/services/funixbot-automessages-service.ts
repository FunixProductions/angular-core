import {HttpClient} from "@angular/common/http";
import {FunixbotAutomessageDto} from "../dtos/funixbot-automessage-dto";
import {FunixgamingService} from "../../funixgaming-service";

export class FunixbotAutomessagesService extends FunixgamingService<FunixbotAutomessageDto> {

    constructor(http: HttpClient, production: boolean) {
      super(
        http,
        production,
        "funixbot/automessages"
      );
    }

}
