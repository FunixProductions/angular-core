import {CrudHttpClient} from "../../../core/components/requests/crud-http-client";
import FunixbotAutomessageDto from "../dtos/funixbot-automessage-dto";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export default class FunixbotAutomessagesService extends CrudHttpClient<FunixbotAutomessageDto> {

    constructor() {
      super(null, "https://funixprod-api.herokuapp.com", "/funixbot/automessages");
    }

}
