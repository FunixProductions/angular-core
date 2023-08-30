import {CrudHttpClient} from "../../../core/components/requests/crud-http-client";
import FunixbotAutomessageDto from "../dtos/funixbot-automessage-dto";
import {HttpClient} from "@angular/common/http";

export default class FunixbotAutomessagesService extends CrudHttpClient<FunixbotAutomessageDto> {

    constructor(http: HttpClient, production: boolean) {
      super(
        http,
        production ? 'https://api.funixgaming.fr' : 'https://dev.api.funixgaming.fr',
        "/funixbot/automessages"
      );
    }

}
