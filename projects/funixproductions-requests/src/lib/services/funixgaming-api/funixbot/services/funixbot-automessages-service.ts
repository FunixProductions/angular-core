import FunixbotAutomessageDto from "../dtos/funixbot-automessage-dto";
import {HttpClient} from "@angular/common/http";
import FunixgamingService from "../../funixgaming-service";

export default class FunixbotAutomessagesService extends FunixgamingService<FunixbotAutomessageDto> {

    constructor(http: HttpClient, production: boolean) {
      super(
        http,
        production,
        "funixbot/automessages"
      );
    }

}
